export const mediaFrom768 = '(max-width: 768px)';
export const mediaFrom1440 = '(max-width: 1440px)';
export const mediaFrom530 = '(max-width: 530px)';

export const getSlidesToPreview = (isMobile: boolean, isTablet: boolean, isDesktop: boolean) => {
  if (isMobile) return 2;
  if (isTablet) return 3;
  if (isDesktop) return 5;
};
