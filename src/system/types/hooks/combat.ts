import { HOOKS } from '@system/constants/hooks';

declare module '@league-of-foundry-developers/foundry-vtt-types/configuration' {
    namespace Hooks {
        interface HookConfig {
            [HOOKS.COMBAT_START]: [combat: Combat];
        }
    }
}
