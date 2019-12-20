
type TrackingData = {
  action: string;
};

type PageViewData = TrackingData & {
  url: string;
};

export function trackPageView(data: PageViewData, extraData?: Object): void {
  console.log('trackPageView', {data, extraData});
}

export function trackEvent(data: TrackingData, extraData?: Object): void {
  console.log('trackEvent', { data, extraData });
}
