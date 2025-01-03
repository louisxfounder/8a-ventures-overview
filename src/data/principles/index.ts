import { PrincipleContent } from './types';
import { overviewPrinciple } from './overview';
import { fixProblemsPrinciple } from './fix-problems';
import { startSmallPrinciple } from './start-small';
import { plainLanguagePrinciple } from './plain-language';
import { doWhatYouSayPrinciple } from './do-what-you-say';
import { businessAsSystemPrinciple } from './business-as-system';
import { growAtRightPacePrinciple } from './grow-at-right-pace';
import { timelessRelationshipsPrinciple } from './timeless-relationships';
import { otherPrinciples } from './other-principles';

export type { PrincipleContent };

export const principles: PrincipleContent[] = [
  overviewPrinciple,
  fixProblemsPrinciple,
  startSmallPrinciple,
  plainLanguagePrinciple,
  doWhatYouSayPrinciple,
  ...otherPrinciples,
  businessAsSystemPrinciple,
  growAtRightPacePrinciple,
  timelessRelationshipsPrinciple
];