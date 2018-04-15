import * as cleaners from './cleaners';

export const manageLaunches = launches => {
  const infoFalcon1 = cleaners.filterLaunches(launches, 'falcon1');
  const infoFalcon9 = cleaners.filterLaunches(launches, 'falcon9');
  const infoFalconHeavy = cleaners.filterLaunches(launches, 'falconheavy');
  const falcon1 =  cleaners.cleanLaunches(infoFalcon1);
  const falcon9 =  cleaners.cleanLaunches(infoFalcon9);
  const falconHeavy =  cleaners.cleanLaunches(infoFalconHeavy);
  return cleaners.combineLaunches(falcon1, falcon9, falconHeavy);
};