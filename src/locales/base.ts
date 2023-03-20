export interface BaseLang {
  save: string;
  confirm: string;
  cancel: string;
  done: string;
  noData: string;
  placeholder: string;
  select: string;
  name: string;
  tel: string;
  default: string;
  addres: string;
  video: {
    errorTip: string;
    clickRetry: string;
  };
  fixednav: {
    activeText: string;
    unActiveText: string;
  };
  infiniteloading: {
    pullRefreshText: string;
    loadText: string;
    loadMoreText: string;
  };
  searchHistory: {
    recentSearchText: string;
    searchDiscoverText: string;
    noDiscoverDataText: string;
    rightOutIcon: string;
    deleteAll: string;
    finish: string;
    hidden: string;
  };
  settleBar: {
    totalText: string;
    settleButtonText: string;
    selectAll: string;
  };
  pagination: {
    prev: string;
    next: string;
  };
  range: {
    rangeText: string;
  };
  calendaritem: {
    weekdays: Array<string>;
    end: string;
    start: string;
    title: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    monthTitle: Function;
    today: string;
    loadPreviousMonth: string;
    noEarlierMonth: string;
  };
  shortpassword: {
    title: string;
    desc: string;
    tips: string;
  };
  uploader: {
    ready: string;
    readyUpload: string;
    waitingUpload: string;
    uploading: string;
    success: string;
    error: string;
    deleteWord: string;
  };
  countdown: {
    day: string;
    hour: string;
    minute: string;
    second: string;
  };
  address: {
    selectRegion: string;
    deliveryTo: string;
    chooseAnotherAddress: string;
  };
  signature: {
    reSign: string;
    unSupportTpl: string;
  };
  ecard: {
    chooseText: string;
    otherValueText: string;
    placeholder: string;
  };
  receiveInvoiceEdit: {
    nameText: string;
    namePlaceholder: string;
    nameErrorMsg: string;
    telText: string;
    telPlaceholder: string;
    telErrorMsg: string;
    regionText: string;
    regionPlaceholder: string;
    regionErrorMsg: string;
    addressText: string;
    addressPlaceholder: string;
    addressErrorMsg: string;
    bottomText: string;
  };
  timeselect: {
    pickupTime: string;
  };
  sku: {
    buyNow: string;
    buyNumber: string;
    addToCard: string;
    confirm: string;
  };
  skuheader: {
    skuId: string;
  };
  addresslist: {
    addAddress: string;
  };
  itemContents: {
    default: string;
  };
  swipeShell: {
    delete: string;
  };
  generalShell: {
    copyAddress: string;
    setDefault: string;
    deleteAddress: string;
  };
  comment: {
    complaintsText: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    additionalReview: Function;
    // eslint-disable-next-line @typescript-eslint/ban-types
    additionalImages: Function;
  };
  searchbar: {
    basePlaceholder: string;
    text: string;
    test: string;
    title1: string;
    title2: string;
    title3: string;
    title4: string;
    title5: string;
    title6: string;
  };
  audio: {
    back: string;
    forward: string;
    pause: string;
    start: string;
    mute: string;
    tips: string;
  };
  datepicker: {
    year: string;
    month: string;
    day: string;
    hour: string;
    min: string;
    seconds: string;
  };
  pullToRefresh: {
    pullingText: string;
    canReleaseText: string;
    refreshingText: string;
    completeText: string;
  };
  orderRemark: {
    placeholderText: string;
    title: string;
    tagTitle: string;
    submitText: string;
  };
  horizontalscrolling: {
    more: string;
  };
  orderCancelPanel: { otherText: string };
  addressedit: {
    nameText: string;
    namePlaceholder: string;
    nameErrorMsg: string;
    telText: string;
    telPlaceholder: string;
    telErrorMsg: string;
    regionText: string;
    regionPlaceholder: string;
    regionErrorMsg: string;
    addressText: string;
    addressPlaceholder: string;
    addressErrorMsg: string;
    bottomText: string;
    setDefaultText: string;
    errorToastText: string;
  };
  login: {
    accountPlaceholder: string;
    telOrMailPlaceholder: string;
    passwordPlaceholder: string;
    verifyPlaceholder: string;
    verifyButtonText: string;
    getCodeErrorToast: string;
    switchLoginText1: string;
    switchLoginText2: string;
    forgetPwdText: string;
    loginButtonText: string;
  };
  category: {
    pullUpText: string;
  };
}
