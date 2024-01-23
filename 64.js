module.exports = function (bY6) {
  bY6.THREEx = {};
  bY6.THREEx.RendererStats = function () {
    var bY7 = document.createElement("div");
    bY7.style.cssText = "width:80px;opacity:0.9;cursor:pointer";
    var bYa = document.createElement("div");
    bYa.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#200;";
    bY7.appendChild(bYa);
    var bYb = document.createElement("div");
    bYb.style.cssText = "color:#f00;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
    bYb.innerHTML = "WebGLRenderer";
    bYa.appendChild(bYb);
    var bYc = [];
    for (bYb = 0; bYb < 9; bYb++) {
      bYc[bYb] = document.createElement("div");
      bYc[bYb].style.cssText = "color:#f00;background-color:#311;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
      bYa.appendChild(bYc[bYb]);
      bYc[bYb].innerHTML = "-";
    }
    var bYd = Date.now();
    return {
      domElement: bY7,
      update: function (bY7) {
        console.assert(bY7 instanceof bY6.WebGLRenderer);
        if (Date.now() - bYd >= 1000 / 30) {
          bYd = Date.now();
          var bYa = 0;
          bYc[bYa++].textContent = "== Memory =====";
          bYc[bYa++].textContent = "Programs: " + bY7.info.memory.programs;
          bYc[bYa++].textContent = "Geometries: " + bY7.info.memory.geometries;
          bYc[bYa++].textContent = "Textures: " + bY7.info.memory.textures;
          bYc[bYa++].textContent = "== Render =====";
          bYc[bYa++].textContent = "Calls: " + bY7.info.render.calls;
          bYc[bYa++].textContent = "Vertices: " + bY7.info.render.vertices;
          bYc[bYa++].textContent = "Faces: " + bY7.info.render.faces;
          bYc[bYa++].textContent = "Points: " + bY7.info.render.points;
        }
      }
    };
  };
  bY6.SSAOShader = {
    uniforms: {
      tDiffuse: {
        value: null
      },
      tDepth: {
        value: null
      },
      size: {
        value: new bY6.Vector2(64, 64)
      },
      cameraNear: {
        value: 1
      },
      cameraFar: {
        value: 100
      },
      radius: {
        value: 40
      },
      onlyAO: {
        value: 0
      },
      aoClamp: {
        value: 1
      },
      lumInfluence: {
        value: 0.7
      }
    },
    vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    fragmentShader: "uniform float cameraNear;\nuniform float cameraFar;\n#ifdef USE_LOGDEPTHBUF\nuniform float logDepthBufFC;\n#endif\nuniform float radius;\nuniform bool onlyAO;\nuniform vec2 size;\nuniform float aoClamp;\nuniform float lumInfluence;\nuniform sampler2D tDiffuse;\nuniform sampler2D tDepth;\nvarying vec2 vUv;\n#define DL 2.399963229728653\n#define EULER 2.718281828459045\nconst int samples = 8;\nconst bool useNoise = true;\nconst float noiseAmount = 0.0004;\nconst float diffArea = 0.4;\nconst float gDisplace = 0.4;\n#include <packing>\nvec2 rand( const vec2 coord ) {\nvec2 noise;\nif ( useNoise ) {\nfloat nx = dot ( coord, vec2( 12.9898, 78.233 ) );\nfloat ny = dot ( coord, vec2( 12.9898, 78.233 ) * 2.0 );\nnoise = clamp( fract ( 43758.5453 * sin( vec2( nx, ny ) ) ), 0.0, 1.0 );\n} else {\nfloat ff = fract( 1.0 - coord.s * ( size.x / 2.0 ) );\nfloat gg = fract( coord.t * ( size.y / 2.0 ) );\nnoise = vec2( 0.25, 0.75 ) * vec2( ff ) + vec2( 0.75, 0.25 ) * gg;\n}\nreturn ( noise * 2.0  - 1.0 ) * noiseAmount;\n}\nfloat readDepth( const in vec2 coord ) {\nfloat cameraFarPlusNear = cameraFar + cameraNear;\nfloat cameraFarMinusNear = cameraFar - cameraNear;\nfloat cameraCoef = 2.0 * cameraNear;\n#ifdef USE_LOGDEPTHBUF\nfloat logz = unpackRGBAToDepth( texture2D( tDepth, coord ) );\nfloat w = pow(2.0, (logz / logDepthBufFC)) - 1.0;\nfloat z = (logz / w) + 1.0;\n#else\nfloat z = unpackRGBAToDepth( texture2D( tDepth, coord ) );\n#endif\nreturn cameraCoef / ( cameraFarPlusNear - z * cameraFarMinusNear );\n}\nfloat compareDepths( const in float depth1, const in float depth2, inout int far ) {\nfloat garea = 8.0;\nfloat diff = ( depth1 - depth2 ) * 100.0;\nif ( diff < gDisplace ) {\ngarea = diffArea;\n} else {\nfar = 1;\n}\nfloat dd = diff - gDisplace;\nfloat gauss = pow( EULER, -2.0 * ( dd * dd ) / ( garea * garea ) );\nreturn gauss;\n}\nfloat calcAO( float depth, float dw, float dh ) {\nvec2 vv = vec2( dw, dh );\nvec2 coord1 = vUv + radius * vv;\nvec2 coord2 = vUv - radius * vv;\nfloat temp1 = 0.0;\nfloat temp2 = 0.0;\nint far = 0;\ntemp1 = compareDepths( depth, readDepth( coord1 ), far );\nif ( far > 0 ) {\ntemp2 = compareDepths( readDepth( coord2 ), depth, far );\ntemp1 += ( 1.0 - temp1 ) * temp2;\n}\nreturn temp1;\n}\nvoid main() {\nvec2 noise = rand( vUv );\nfloat depth = readDepth( vUv );\nfloat tt = clamp( depth, aoClamp, 1.0 );\nfloat w = ( 1.0 / size.x ) / tt + ( noise.x * ( 1.0 - noise.x ) );\nfloat h = ( 1.0 / size.y ) / tt + ( noise.y * ( 1.0 - noise.y ) );\nfloat ao = 0.0;\nfloat dz = 1.0 / float( samples );\nfloat l = 0.0;\nfloat z = 1.0 - dz / 2.0;\nfor ( int i = 0; i <= samples; i ++ ) {\nfloat r = sqrt( 1.0 - z );\nfloat pw = cos( l ) * r;\nfloat ph = sin( l ) * r;\nao += calcAO( depth, pw * w, ph * h );\nz = z - dz;\nl = l + DL;\n}\nao /= float( samples );\nao = 1.0 - ao;\nvec3 color = texture2D( tDiffuse, vUv ).rgb;\nvec3 lumcoeff = vec3( 0.299, 0.587, 0.114 );\nfloat lum = dot( color.rgb, lumcoeff );\nvec3 luminance = vec3( lum );\nvec3 final = vec3( color * mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\nif ( onlyAO ) {\nfinal = vec3( mix( vec3( ao ), vec3( 1.0 ), luminance * lumInfluence ) );\n}\ngl_FragColor = vec4( final, 0.5 );\n}"
  };
  bY6.CopyShader = {
    uniforms: {
      tDiffuse: {
        value: null
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    fragmentShader: "uniform float opacity;\nuniform sampler2D tDiffuse;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"
  };
  bY6.EffectComposer = function (bY7, bYh) {
    this.renderer = bY7;
    if (bYh === undefined) {
      var bYi = {
        minFilter: bY6.LinearFilter,
        magFilter: bY6.LinearFilter,
        format: bY6.RGBAFormat,
        stencilBuffer: false
      };
      var bYj = bY7.getDrawingBufferSize();
      (bYh = new bY6.WebGLRenderTarget(bYj.width, bYj.height, bYi)).texture.name = "EffectComposer.rt1";
    }
    this.renderTarget1 = bYh;
    this.renderTarget2 = bYh.clone();
    this.renderTarget2.texture.name = "EffectComposer.rt2";
    this.writeBuffer = this.renderTarget1;
    this.readBuffer = this.renderTarget2;
    this.passes = [];
    if (bY6.CopyShader === undefined) {
      console.error("THREE.EffectComposer relies on THREE.CopyShader");
    }
    if (bY6.ShaderPass === undefined) {
      console.error("THREE.EffectComposer relies on THREE.ShaderPass");
    }
    this.copyPass = new bY6.ShaderPass(bY6.CopyShader);
  };
  Object.assign(bY6.EffectComposer.prototype, {
    swapBuffers: function () {
      var bY6 = this.readBuffer;
      this.readBuffer = this.writeBuffer;
      this.writeBuffer = bY6;
    },
    addPass: function (bY6) {
      this.passes.push(bY6);
      var bY7 = this.renderer.getDrawingBufferSize();
      bY6.setSize(bY7.width, bY7.height);
    },
    insertPass: function (bY6, bY7) {
      this.passes.splice(bY7, 0, bY6);
    },
    render: function (bY7) {
      var bYq;
      var bYr = false;
      var bYs = this.passes.length;
      for (bYq = 0; bYq < bYs; bYq++) {
        var bYt = this.passes[bYq];
        if (bYt.enabled !== false) {
          bYt.render(this.renderer, this.writeBuffer, this.readBuffer, bY7, bYr);
          if (bYt.needsSwap) {
            if (bYr) {
              var bYu = this.renderer.context;
              bYu.stencilFunc(bYu.NOTEQUAL, 1, 4294967295);
              this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, bY7);
              bYu.stencilFunc(bYu.EQUAL, 1, 4294967295);
            }
            this.swapBuffers();
          }
          if (bY6.MaskPass !== undefined) {
            if (bYt instanceof bY6.MaskPass) {
              bYr = true;
            } else if (bYt instanceof bY6.ClearMaskPass) {
              bYr = false;
            }
          }
        }
      }
    },
    reset: function (bY6) {
      if (bY6 === undefined) {
        var bY7 = this.renderer.getDrawingBufferSize();
        (bY6 = this.renderTarget1.clone()).setSize(bY7.width, bY7.height);
      }
      this.renderTarget1.dispose();
      this.renderTarget2.dispose();
      this.renderTarget1 = bY6;
      this.renderTarget2 = bY6.clone();
      this.writeBuffer = this.renderTarget1;
      this.readBuffer = this.renderTarget2;
    },
    setSize: function (bY6, bY7) {
      this.renderTarget1.setSize(bY6, bY7);
      this.renderTarget2.setSize(bY6, bY7);
      for (var bYz = 0; bYz < this.passes.length; bYz++) {
        this.passes[bYz].setSize(bY6, bY7);
      }
    }
  });
  bY6.Pass = function () {
    this.needsSwap = this.enabled = true;
    this.renderToScreen = this.clear = false;
  };
  Object.assign(bY6.Pass.prototype, {
    setSize: function () {},
    render: function () {
      console.error("THREE.Pass: .render() must be implemented in derived pass.");
    }
  });
  bY6.RenderPass = function (bY7, bYB, bYC, bYD, bYE) {
    bY6.Pass.call(this);
    this.scene = bY7;
    this.camera = bYB;
    this.overrideMaterial = bYC;
    this.clearColor = bYD;
    this.clearAlpha = bYE === undefined ? 0 : bYE;
    this.clear = true;
    this.needsSwap = this.clearDepth = false;
  };
  bY6.RenderPass.prototype = Object.assign(Object.create(bY6.Pass.prototype), {
    constructor: bY6.RenderPass,
    render: function (bY6, bY7, bYH) {
      bY7 = bY6.autoClear;
      bY6.autoClear = false;
      this.scene.overrideMaterial = this.overrideMaterial;
      if (this.clearColor) {
        var bYI = bY6.getClearColor().getHex();
        var bYJ = bY6.getClearAlpha();
        bY6.setClearColor(this.clearColor, this.clearAlpha);
      }
      if (this.clearDepth) {
        bY6.clearDepth();
      }
      bY6.render(this.scene, this.camera, this.renderToScreen ? null : bYH, this.clear);
      if (this.clearColor) {
        bY6.setClearColor(bYI, bYJ);
      }
      this.scene.overrideMaterial = null;
      bY6.autoClear = bY7;
    }
  });
  bY6.ShaderPass = function (bY7, bYL) {
    bY6.Pass.call(this);
    this.textureID = bYL === undefined ? "tDiffuse" : bYL;
    if (bY7 instanceof bY6.ShaderMaterial) {
      this.uniforms = bY7.uniforms;
      this.material = bY7;
    } else if (bY7) {
      this.uniforms = bY6.UniformsUtils.clone(bY7.uniforms);
      this.material = new bY6.ShaderMaterial({
        defines: Object.assign({}, bY7.defines),
        uniforms: this.uniforms,
        vertexShader: bY7.vertexShader,
        fragmentShader: bY7.fragmentShader
      });
    }
    this.camera = new bY6.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new bY6.Scene();
    this.quad = new bY6.Mesh(new bY6.PlaneBufferGeometry(2, 2), null);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  };
  bY6.ShaderPass.prototype = Object.assign(Object.create(bY6.Pass.prototype), {
    constructor: bY6.ShaderPass,
    render: function (bY6, bY7, bYO) {
      if (this.uniforms[this.textureID]) {
        this.uniforms[this.textureID].value = bYO.texture;
      }
      this.quad.material = this.material;
      if (this.renderToScreen) {
        bY6.render(this.scene, this.camera);
      } else {
        bY6.render(this.scene, this.camera, bY7, this.clear);
      }
    }
  });
  bY6.MaskPass = function (bY7, bYQ) {
    bY6.Pass.call(this);
    this.scene = bY7;
    this.camera = bYQ;
    this.clear = true;
    this.inverse = this.needsSwap = false;
  };
  bY6.MaskPass.prototype = Object.assign(Object.create(bY6.Pass.prototype), {
    constructor: bY6.MaskPass,
    render: function (bY6, bY7, bYT, bYU, bYV) {
      bYU = bY6.context;
      (bYV = bY6.state).buffers.color.setMask(false);
      bYV.buffers.depth.setMask(false);
      bYV.buffers.color.setLocked(true);
      bYV.buffers.depth.setLocked(true);
      if (this.inverse) {
        var bYW = 0;
        var bYX = 1;
      } else {
        bYW = 1;
        bYX = 0;
      }
      bYV.buffers.stencil.setTest(true);
      bYV.buffers.stencil.setOp(bYU.REPLACE, bYU.REPLACE, bYU.REPLACE);
      bYV.buffers.stencil.setFunc(bYU.ALWAYS, bYW, 4294967295);
      bYV.buffers.stencil.setClear(bYX);
      bY6.render(this.scene, this.camera, bYT, this.clear);
      bY6.render(this.scene, this.camera, bY7, this.clear);
      bYV.buffers.color.setLocked(false);
      bYV.buffers.depth.setLocked(false);
      bYV.buffers.stencil.setFunc(bYU.EQUAL, 1, 4294967295);
      bYV.buffers.stencil.setOp(bYU.KEEP, bYU.KEEP, bYU.KEEP);
    }
  });
  bY6.ClearMaskPass = function () {
    bY6.Pass.call(this);
    this.needsSwap = false;
  };
  bY6.ClearMaskPass.prototype = Object.create(bY6.Pass.prototype);
  Object.assign(bY6.ClearMaskPass.prototype, {
    render: function (bY6) {
      bY6.state.buffers.stencil.setTest(false);
    }
  });
  bY6.SSAOPass = function (bY7, bZ0, bZ1, bZ2) {
    if (bY6.SSAOShader === undefined) {
      console.warn("THREE.SSAOPass depends on THREE.SSAOShader");
      return new bY6.ShaderPass();
    } else {
      bY6.ShaderPass.call(this, bY6.SSAOShader);
      this.width = bZ1 === undefined ? 128 : bZ1;
      this.height = bZ2 === undefined ? 128 : bZ2;
      this.renderToScreen = false;
      this.camera2 = bZ0;
      this.scene2 = bY7;
      this.depthMaterial = new bY6.MeshDepthMaterial();
      this.depthMaterial.depthPacking = bY6.RGBADepthPacking;
      this.depthMaterial.blending = bY6.NoBlending;
      this.depthRenderTarget = new bY6.WebGLRenderTarget(this.width, this.height, {
        minFilter: bY6.LinearFilter,
        magFilter: bY6.LinearFilter
      });
      this.uniforms.tDepth.value = this.depthRenderTarget.texture;
      this.uniforms.size.value.set(this.width, this.height);
      this.uniforms.cameraNear.value = this.camera2.near;
      this.uniforms.cameraFar.value = this.camera2.far;
      this.uniforms.radius.value = 4;
      this.uniforms.onlyAO.value = false;
      this.uniforms.aoClamp.value = 0.25;
      this.uniforms.lumInfluence.value = 0.7;
      Object.defineProperties(this, {
        radius: {
          get: function () {
            return this.uniforms.radius.value;
          },
          set: function (bY6) {
            this.uniforms.radius.value = bY6;
          }
        },
        onlyAO: {
          get: function () {
            return this.uniforms.onlyAO.value;
          },
          set: function (bY6) {
            this.uniforms.onlyAO.value = bY6;
          }
        },
        aoClamp: {
          get: function () {
            return this.uniforms.aoClamp.value;
          },
          set: function (bY6) {
            this.uniforms.aoClamp.value = bY6;
          }
        },
        lumInfluence: {
          get: function () {
            return this.uniforms.lumInfluence.value;
          },
          set: function (bY6) {
            this.uniforms.lumInfluence.value = bY6;
          }
        }
      });
      return;
    }
  };
  bY6.SSAOPass.prototype = Object.create(bY6.ShaderPass.prototype);
  bY6.SSAOPass.prototype.render = function (bY7, bZ8, bZ9, bZa, bZb) {
    this.scene2.overrideMaterial = this.depthMaterial;
    bY7.render(this.scene2, this.camera2, this.depthRenderTarget, true);
    this.scene2.overrideMaterial = null;
    bY6.ShaderPass.prototype.render.call(this, bY7, bZ8, bZ9, bZa, bZb);
  };
  bY6.SSAOPass.prototype.setScene = function (bY6) {
    this.scene2 = bY6;
  };
  bY6.SSAOPass.prototype.setCamera = function (bY6) {
    this.camera2 = bY6;
    this.uniforms.cameraNear.value = this.camera2.near;
    this.uniforms.cameraFar.value = this.camera2.far;
  };
  bY6.SSAOPass.prototype.setSize = function (bY6, bY7) {
    this.width = bY6;
    this.height = bY7;
    this.uniforms.size.value.set(this.width, this.height);
    this.depthRenderTarget.setSize(this.width, this.height);
  };
  bY6.LuminosityHighPassShader = {
    shaderID: "luminosityHighPass",
    uniforms: {
      tDiffuse: {
        type: "t",
        value: null
      },
      luminosityThreshold: {
        type: "f",
        value: 1
      },
      smoothWidth: {
        type: "f",
        value: 1
      },
      defaultColor: {
        type: "c",
        value: new bY6.Color(0)
      },
      defaultOpacity: {
        type: "f",
        value: 0
      }
    },
    vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    fragmentShader: "uniform sampler2D tDiffuse;\nuniform vec3 defaultColor;\nuniform float defaultOpacity;\nuniform float luminosityThreshold;\nuniform float smoothWidth;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\nvec3 luma = vec3( 0.299, 0.587, 0.114 );\nfloat v = dot( texel.xyz, luma );\nvec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\nfloat alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\ngl_FragColor = mix( outputColor, texel, alpha );\n}"
  };
  bY6.UnrealBloomPass = function (bY7, bZh, bZi, bZj) {
    bY6.Pass.call(this);
    this.strength = bZh === undefined ? 1 : bZh;
    this.radius = bZi;
    this.threshold = bZj;
    this.resolution = bY7 === undefined ? new bY6.Vector2(256, 256) : new bY6.Vector2(bY7.x, bY7.y);
    this.clearColor = new bY6.Color(0, 0, 0);
    var bZk = {
      minFilter: bY6.LinearFilter,
      magFilter: bY6.LinearFilter,
      format: bY6.RGBAFormat
    };
    this.renderTargetsHorizontal = [];
    this.renderTargetsVertical = [];
    this.nMips = 5;
    bY7 = Math.round(this.resolution.x / 2);
    bZi = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new bY6.WebGLRenderTarget(bY7, bZi, bZk);
    this.renderTargetBright.texture.name = "UnrealBloomPass.bright";
    this.renderTargetBright.texture.generateMipmaps = false;
    for (var bZl, bZm = 0; bZm < this.nMips; bZm++) {
      (bZl = new bY6.WebGLRenderTarget(bY7, bZi, bZk)).texture.name = "UnrealBloomPass.h" + bZm;
      bZl.texture.generateMipmaps = false;
      this.renderTargetsHorizontal.push(bZl);
      (bZl = new bY6.WebGLRenderTarget(bY7, bZi, bZk)).texture.name = "UnrealBloomPass.v" + bZm;
      bZl.texture.generateMipmaps = false;
      this.renderTargetsVertical.push(bZl);
      bY7 = Math.round(bY7 / 2);
      bZi = Math.round(bZi / 2);
    }
    if (bY6.LuminosityHighPassShader === undefined) {
      console.error("THREE.UnrealBloomPass relies on THREE.LuminosityHighPassShader");
    }
    bY7 = bY6.LuminosityHighPassShader;
    this.highPassUniforms = bY6.UniformsUtils.clone(bY7.uniforms);
    this.highPassUniforms.luminosityThreshold.value = bZj;
    this.highPassUniforms.smoothWidth.value = 0.01;
    this.materialHighPassFilter = new bY6.ShaderMaterial({
      uniforms: this.highPassUniforms,
      vertexShader: bY7.vertexShader,
      fragmentShader: bY7.fragmentShader,
      defines: {}
    });
    this.separableBlurMaterials = [];
    bZj = [3, 5, 7, 9, 11];
    bY7 = Math.round(this.resolution.x / 2);
    bZi = Math.round(this.resolution.y / 2);
    bZm = 0;
    for (; bZm < this.nMips; bZm++) {
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(bZj[bZm]));
      this.separableBlurMaterials[bZm].uniforms.texSize.value = new bY6.Vector2(bY7, bZi);
      bY7 = Math.round(bY7 / 2);
      bZi = Math.round(bZi / 2);
    }
    this.compositeMaterial = this.getCompositeMaterial(this.nMips);
    this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture;
    this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture;
    this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture;
    this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture;
    this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture;
    this.compositeMaterial.uniforms.bloomStrength.value = bZh;
    this.compositeMaterial.uniforms.bloomRadius.value = 0.1;
    this.compositeMaterial.needsUpdate = true;
    this.compositeMaterial.uniforms.bloomFactors.value = [1, 0.8, 0.6, 0.4, 0.2];
    this.bloomTintColors = [new bY6.Vector3(1, 1, 1), new bY6.Vector3(1, 1, 1), new bY6.Vector3(1, 1, 1), new bY6.Vector3(1, 1, 1), new bY6.Vector3(1, 1, 1)];
    this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    if (bY6.CopyShader === undefined) {
      console.error("THREE.BloomPass relies on THREE.CopyShader");
    }
    bZh = bY6.CopyShader;
    this.copyUniforms = bY6.UniformsUtils.clone(bZh.uniforms);
    this.copyUniforms.opacity.value = 1;
    this.materialCopy = new bY6.ShaderMaterial({
      uniforms: this.copyUniforms,
      vertexShader: bZh.vertexShader,
      fragmentShader: bZh.fragmentShader,
      blending: bY6.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      transparent: true
    });
    this.enabled = true;
    this.needsSwap = false;
    this.oldClearColor = new bY6.Color();
    this.oldClearAlpha = 1;
    this.camera = new bY6.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.scene = new bY6.Scene();
    this.basic = new bY6.MeshBasicMaterial();
    this.quad = new bY6.Mesh(new bY6.PlaneBufferGeometry(2, 2), null);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  };
  bY6.UnrealBloomPass.prototype = Object.assign(Object.create(bY6.Pass.prototype), {
    constructor: bY6.UnrealBloomPass,
    dispose: function () {
      for (var bY6 = 0; bY6 < this.renderTargetsHorizontal.length; bY6++) {
        this.renderTargetsHorizontal[bY6].dispose();
      }
      for (bY6 = 0; bY6 < this.renderTargetsVertical.length; bY6++) {
        this.renderTargetsVertical[bY6].dispose();
      }
      this.renderTargetBright.dispose();
    },
    setSize: function (bY7, bZp) {
      var bZq = Math.round(bY7 / 2);
      var bZr = Math.round(bZp / 2);
      this.renderTargetBright.setSize(bZq, bZr);
      for (var bZs = 0; bZs < this.nMips; bZs++) {
        this.renderTargetsHorizontal[bZs].setSize(bZq, bZr);
        this.renderTargetsVertical[bZs].setSize(bZq, bZr);
        this.separableBlurMaterials[bZs].uniforms.texSize.value = new bY6.Vector2(bZq, bZr);
        bZq = Math.round(bZq / 2);
        bZr = Math.round(bZr / 2);
      }
    },
    render: function (bY7, bZu, bZv, bZw, bZx) {
      this.oldClearColor.copy(bY7.getClearColor());
      this.oldClearAlpha = bY7.getClearAlpha();
      bZu = bY7.autoClear;
      bY7.autoClear = false;
      bY7.setClearColor(this.clearColor, 0);
      if (bZx) {
        bY7.context.disable(bY7.context.STENCIL_TEST);
      }
      if (this.renderToScreen) {
        this.quad.material = this.basic;
        this.basic.map = bZv.texture;
        bY7.render(this.scene, this.camera, undefined, true);
      }
      this.highPassUniforms.tDiffuse.value = bZv.texture;
      this.highPassUniforms.luminosityThreshold.value = this.threshold;
      this.quad.material = this.materialHighPassFilter;
      bY7.render(this.scene, this.camera, this.renderTargetBright, true);
      bZw = this.renderTargetBright;
      for (var bZy = 0; bZy < this.nMips; bZy++) {
        this.quad.material = this.separableBlurMaterials[bZy];
        this.separableBlurMaterials[bZy].uniforms.colorTexture.value = bZw.texture;
        this.separableBlurMaterials[bZy].uniforms.direction.value = bY6.UnrealBloomPass.BlurDirectionX;
        bY7.render(this.scene, this.camera, this.renderTargetsHorizontal[bZy], true);
        this.separableBlurMaterials[bZy].uniforms.colorTexture.value = this.renderTargetsHorizontal[bZy].texture;
        this.separableBlurMaterials[bZy].uniforms.direction.value = bY6.UnrealBloomPass.BlurDirectionY;
        bY7.render(this.scene, this.camera, this.renderTargetsVertical[bZy], true);
        bZw = this.renderTargetsVertical[bZy];
      }
      this.quad.material = this.compositeMaterial;
      this.compositeMaterial.uniforms.bloomStrength.value = this.strength;
      this.compositeMaterial.uniforms.bloomRadius.value = this.radius;
      this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
      bY7.render(this.scene, this.camera, this.renderTargetsHorizontal[0], true);
      this.quad.material = this.materialCopy;
      this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture;
      if (bZx) {
        bY7.context.enable(bY7.context.STENCIL_TEST);
      }
      if (this.renderToScreen) {
        bY7.render(this.scene, this.camera, undefined, false);
      } else {
        bY7.render(this.scene, this.camera, bZv, false);
      }
      bY7.setClearColor(this.oldClearColor, this.oldClearAlpha);
      bY7.autoClear = bZu;
    },
    getSeperableBlurMaterial: function (bY7) {
      return new bY6.ShaderMaterial({
        defines: {
          KERNEL_RADIUS: bY7,
          SIGMA: bY7
        },
        uniforms: {
          colorTexture: {
            value: null
          },
          texSize: {
            value: new bY6.Vector2(0.5, 0.5)
          },
          direction: {
            value: new bY6.Vector2(0.5, 0.5)
          }
        },
        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
        fragmentShader: "#include <common>\t\t\t\tvarying vec2 vUv;\n\t\t\t\tuniform sampler2D colorTexture;\n\t\t\t\tuniform vec2 texSize;\t\t\t\tuniform vec2 direction;\t\t\t\t\t\t\t\tfloat gaussianPdf(in float x, in float sigma) {\t\t\t\t\treturn 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;\t\t\t\t}\t\t\t\tvoid main() {\n\t\t\t\t\tvec2 invSize = 1.0 / texSize;\t\t\t\t\tfloat fSigma = float(SIGMA);\t\t\t\t\tfloat weightSum = gaussianPdf(0.0, fSigma);\t\t\t\t\tvec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;\t\t\t\t\tfor( int i = 1; i < KERNEL_RADIUS; i ++ ) {\t\t\t\t\t\tfloat x = float(i);\t\t\t\t\t\tfloat w = gaussianPdf(x, fSigma);\t\t\t\t\t\tvec2 uvOffset = direction * invSize * x;\t\t\t\t\t\tvec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;\t\t\t\t\t\tvec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;\t\t\t\t\t\tdiffuseSum += (sample1 + sample2) * w;\t\t\t\t\t\tweightSum += 2.0 * w;\t\t\t\t\t}\t\t\t\t\tgl_FragColor = vec4(diffuseSum/weightSum, 1.0);\n\t\t\t\t}"
      });
    },
    getCompositeMaterial: function (bY7) {
      return new bY6.ShaderMaterial({
        defines: {
          NUM_MIPS: bY7
        },
        uniforms: {
          blurTexture1: {
            value: null
          },
          blurTexture2: {
            value: null
          },
          blurTexture3: {
            value: null
          },
          blurTexture4: {
            value: null
          },
          blurTexture5: {
            value: null
          },
          dirtTexture: {
            value: null
          },
          bloomStrength: {
            value: 1
          },
          bloomFactors: {
            value: null
          },
          bloomTintColors: {
            value: null
          },
          bloomRadius: {
            value: 0
          }
        },
        vertexShader: "varying vec2 vUv;\n\t\t\t\tvoid main() {\n\t\t\t\t\tvUv = uv;\n\t\t\t\t\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t}",
        fragmentShader: "varying vec2 vUv;\t\t\t\tuniform sampler2D blurTexture1;\t\t\t\tuniform sampler2D blurTexture2;\t\t\t\tuniform sampler2D blurTexture3;\t\t\t\tuniform sampler2D blurTexture4;\t\t\t\tuniform sampler2D blurTexture5;\t\t\t\tuniform sampler2D dirtTexture;\t\t\t\tuniform float bloomStrength;\t\t\t\tuniform float bloomRadius;\t\t\t\tuniform float bloomFactors[NUM_MIPS];\t\t\t\tuniform vec3 bloomTintColors[NUM_MIPS];\t\t\t\t\t\t\t\tfloat lerpBloomFactor(const in float factor) { \t\t\t\t\tfloat mirrorFactor = 1.2 - factor;\t\t\t\t\treturn mix(factor, mirrorFactor, bloomRadius);\t\t\t\t}\t\t\t\t\t\t\t\tvoid main() {\t\t\t\t\tgl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) + \t\t\t\t\t\t\t\t\t\t\t\t\t lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );\t\t\t\t}"
      });
    }
  });
  bY6.UnrealBloomPass.BlurDirectionX = new bY6.Vector2(1, 0);
  bY6.UnrealBloomPass.BlurDirectionY = new bY6.Vector2(0, 1);
  bY6.StrippedLambertMaterial = function (bY7) {
    let bZC = new bY6.ShaderMaterial({
      name: "lambert-stripped",
      uniforms: bY6.UniformsUtils.merge([bY6.ShaderLib.lambert.uniforms]),
      lights: true,
      fog: true,
      vertexShader: "\n#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n    varying vec3 vLightBack;\n    varying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n// #include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n// #include <morphtarget_pars_vertex>\n// #include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n// #include <logdepthbuf_pars_vertex>\n// #include <clipping_planes_pars_vertex>\nvoid main() {\n    #include <uv_vertex>\n    #include <uv2_vertex>\n    #include <color_vertex>\n    #include <beginnormal_vertex>\n    // #include <morphnormal_vertex>\n    // #include <skinbase_vertex>\n    // #include <skinnormal_vertex>\n    #include <defaultnormal_vertex>\n    #include <begin_vertex>\n    // #include <morphtarget_vertex>\n    // #include <skinning_vertex>\n    #include <project_vertex>\n    // #include <logdepthbuf_vertex>\n    // #include <clipping_planes_vertex>\n    #include <worldpos_vertex>\n    // #include <envmap_vertex>\n    #include <lights_lambert_vertex>\n    #include <shadowmap_vertex>\n    #include <fog_vertex>\n}\n",
      fragmentShader: "\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n\n#ifdef DOUBLE_SIDED\n    varying vec3 vLightBack;\n    varying vec3 vIndirectBack;\n#endif\n\n\n#include <common>\n#include <packing>\n// #include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n// #include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n// #include <envmap_pars_fragment>\n#include <bsdfs>  // Shading functions\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n// #include <specularmap_pars_fragment>\n// #include <logdepthbuf_pars_fragment>\n// #include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n    // #include <clipping_planes_fragment>\n\n    vec4 diffuseColor = vec4( diffuse, opacity );\n    ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n    vec3 totalEmissiveRadiance = emissive;\n\n    // #include <logdepthbuf_fragment>\n    #include <map_fragment>\n    #include <color_fragment>\n    // #include <alphamap_fragment>\n    #include <alphatest_fragment>\n    // #include <specularmap_fragment>\n    #include <emissivemap_fragment>\n\n    // accumulation\n    reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\n    #ifdef DOUBLE_SIDED\n\n        reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\n    #else\n\n        reflectedLight.indirectDiffuse += vIndirectFront;\n\n    #endif\n\n    #include <lightmap_fragment>\n\n    reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\n    #ifdef DOUBLE_SIDED\n\n        reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\n    #else\n\n        reflectedLight.directDiffuse = vLightFront;\n\n    #endif\n\n    reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\n    // modulation\n    #include <aomap_fragment>\n\n    vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n    // #include <envmap_fragment>\n\n    gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\n    // #include <tonemapping_fragment>\n    // #include <encodings_fragment>\n    #include <fog_fragment>\n    #include <premultiplied_alpha_fragment>\n    // #include <dithering_fragment>\n}\n    "
    });
    Object.assign(bZC, new bY6.MeshLambertMaterial(bY7));
    bZC.isMeshLambertMaterial = true;
    bZC.setValues(bY7);
    return bZC;
  };
};