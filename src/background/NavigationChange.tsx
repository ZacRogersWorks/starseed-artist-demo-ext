
/**
 * Class to wrap the navigation changes before sending to other parts of the app
 * This makes it easier to maintain this aspect of the extension
 */


export default class NavgiationChange {
  private urlStr: string;
  readonly transitionType: string;
  readonly transitionQualifiers: string[];

  constructor(details: chrome.webNavigation.WebNavigationTransitionCallbackDetails) {
    const { url, transitionType, transitionQualifiers } = details
    this.urlStr = url
    this.transitionType = transitionType
    this.transitionQualifiers = transitionQualifiers
  }

  get url(): string {
    return this.url
  }
}