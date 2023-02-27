const Unit = {
  /**
   * 增加"px"
   */
  pxAdd(value: string | number): string {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }
}

export default Unit
