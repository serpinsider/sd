export interface StepWizardConfig {
  businessName: string;
  businessId: string;
  confirmationPrefix: string;
  formspreeEndpoint: string;
  accentColor: string;
  accentDark: string;
  btnTextColor: string;
  phonePlaceholder: string;
  zipPlaceholder: string;
  deepCleanBundledAddons: string[];
  moveOutBundledAddons: string[];
}

const DEFAULT_DEEP_BUNDLED = [
  'wallStainRemoval',
  'tileAndGrout',
  'baseboardCleaning',
];

const DEFAULT_MOVEOUT_BUNDLED = [
  'bedroomBathroomCabinets',
  'insideKitchenCabinets',
  'interiorWindows',
  'wallStainRemoval',
  'tileAndGrout',
  'baseboardCleaning',
];

export const STEP_WIZARD_CONFIG: StepWizardConfig = {
  businessName: 'San Diego Maids',
  businessId: 'san-diego',
  confirmationPrefix: 'SD',
  formspreeEndpoint: 'xvzwolek',
  accentColor: '#dfbd69',
  accentDark: '#c9a84c',
  btnTextColor: '#283845',
  phonePlaceholder: '(858) 544-6420',
  zipPlaceholder: '92101',
  deepCleanBundledAddons: DEFAULT_DEEP_BUNDLED,
  moveOutBundledAddons: DEFAULT_MOVEOUT_BUNDLED,
};
