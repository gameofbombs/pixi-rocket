import * as app from '@pixi/app';
import * as constants from '@pixi/constants';
import * as core from '@pixi/core';
import * as display from '@pixi/display';
import * as graphics from '@pixi/graphics';
import * as interaction from '@pixi/interaction';
import * as loaders from '@pixi/loaders';
import * as math from '@pixi/math';
import * as mesh from '@pixi/mesh';
import * as particles from '@pixi/particles';
import * as sprite from '@pixi/sprite';
import * as spriteAnimated from '@pixi/sprite-animated';
import * as spritesheet from '@pixi/spritesheet';
import * as spriteTiling from '@pixi/sprite-tiling';
import * as text from '@pixi/text';
import * as ticker from '@pixi/ticker';
import * as utils from '@pixi/utils';
import { settings } from '@pixi/settings';
import { AlphaFilter } from '@pixi/filter-alpha';
import { DisplacementFilter } from '@pixi/filter-displacement';

// Install renderer plugins
core.Renderer.registerPlugin('graphics', graphics.GraphicsRenderer);
core.Renderer.registerPlugin('interaction', interaction.InteractionManager);
core.Renderer.registerPlugin('mesh', mesh.MeshRenderer);
core.Renderer.registerPlugin('particle', particles.ParticleRenderer);
core.Renderer.registerPlugin('sprite', sprite.SpriteRenderer);
core.Renderer.registerPlugin('tilingSprite', spriteTiling.TilingSpriteRenderer);

loaders.Loader.registerPlugin(spritesheet.SpritesheetLoader);

// Apply deplayed mixins
utils.mixins.performMixins();

/**
 * String of the current PIXI version.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name VERSION
 * @type {string}
 */
const VERSION = '5.0-rocket';

/**
 * @namespace PIXI
 */
const PIXI = { VERSION };

/**
 * This namespace contains WebGL-only display filters that can be applied
 * to DisplayObjects using the {@link PIXI.DisplayObject#filters filters} property.
 * @example
 * // Create a new application
 * const app = new PIXI.Application();
 *
 * // Draw a green rectangle
 * const rect = new PIXI.Graphics()
 *     .beginFill(0x00ff00)
 *     .drawRect(40, 40, 200, 200);
 *
 * // Add a blur filter
 * rect.filters = [new PIXI.filters.BlurFilter()];
 *
 * // Display rectangle
 * app.stage.addChild(rect);
 * document.body.appendChild(app.view);
 * @namespace PIXI.filters
 */
const filters = {
    AlphaFilter,
    DisplacementFilter,
};

// Add to namespace window object for people doing `import 'pixi.js'`
if (typeof window !== 'undefined')
{
    const namespaces = {
        filters,
        interaction,
        settings,
        utils,
    };

    window.PIXI = Object.assign(
        PIXI,
        namespaces,
        app,
        constants,
        core,
        display,
        graphics,
        loaders,
        math,
        mesh,
        particles,
        sprite,
        spriteAnimated,
        spritesheet,
        spriteTiling,
        text,
        ticker
    );
}

// Export ES for those importing specifically by name,
// e.g., `import {autoDetectRenderer} from 'pixi.js'`
export * from '@pixi/app';
export * from '@pixi/constants';
export * from '@pixi/core';
export * from '@pixi/display';
export * from '@pixi/graphics';
export * from '@pixi/loaders';
export * from '@pixi/math';
export * from '@pixi/mesh';
export * from '@pixi/particles';
export * from '@pixi/sprite';
export * from '@pixi/spritesheet';
export * from '@pixi/sprite-animated';
export * from '@pixi/sprite-tiling';
export * from '@pixi/text';
export * from '@pixi/ticker';
export {
    PIXI,
    VERSION,
    filters,
    interaction,
    settings,
    utils,
};
