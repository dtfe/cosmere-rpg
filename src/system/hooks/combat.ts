import { HOOKS } from '@system/constants/hooks';
import { CosmereCombat } from '../documents';

export type CombatRoundStart = (
    combat: CosmereCombat,
    previousRound: number,
    startedRound: number,
) => void;

export type CombatRoundEnd = (
    combat: CosmereCombat,
    endedRound: number,
    startedRound: number,
) => void;

declare module '@league-of-foundry-developers/foundry-vtt-types/configuration' {
    namespace Hooks {
        interface HookConfig {
            [HOOKS.COMBAT_ROUND_START]: CombatRoundStart;
            [HOOKS.COMBAT_ROUND_END]: CombatRoundEnd;
        }
    }
}
