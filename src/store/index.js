
class GroundInfo {
  constructor(callback) {
    this.black = []
    this.white = []
    this.callback = callback
  }

  pushBlack(node) {
    this.black.push(node)
    this.isWin()
  }

  pushWhite(node) {
    this.white.push(node)
    this.isWin()
  }

  isWin() {
    window.console.log(this.black,this.white)
    if(this.computedWin(this.black)) {
      this.callback('black')
    } else if(this.computedWin(this.white)) {
      this.callback('white')
    }
  }

  hasSubArr(set,arr) {
    return set.some((item) => {
      return item[0] === arr[0] && item[1] === arr[1]
    })
  }

  computedWin(set) {
    if(set.length<5) {
      return false
    }
    return set.some(arr => {
      const flag1 = 
        this.hasSubArr(set,[arr[0],arr[1]+1])&&
        this.hasSubArr(set,[arr[0],arr[1]+2])&&
        this.hasSubArr(set,[arr[0],arr[1]+3])&&
        this.hasSubArr(set,[arr[0],arr[1]+4])
      
      const flag2 = 
        this.hasSubArr(set,[arr[0]+1,arr[1]])&&
        this.hasSubArr(set,[arr[0]+2,arr[1]])&&
        this.hasSubArr(set,[arr[0]+3,arr[1]])&&
        this.hasSubArr(set,[arr[0]+4,arr[1]])
      
      const flag3 = 
        this.hasSubArr(set,[arr[0]+1,arr[1]+1])&&
        this.hasSubArr(set,[arr[0]+2,arr[1]+2])&&
        this.hasSubArr(set,[arr[0]+3,arr[1]+3])&&
        this.hasSubArr(set,[arr[0]+4,arr[1]+4])
      
      const flag4 = 
        this.hasSubArr(set,[arr[0]+1,arr[1]-1])&&
        this.hasSubArr(set,[arr[0]+2,arr[1]-2])&&
        this.hasSubArr(set,[arr[0]+3,arr[1]-3])&&
        this.hasSubArr(set,[arr[0]+4,arr[1]-4])

      // window.console.log(flag1,flag2,flag3,flag4);
      return flag1 || flag2 || flag3 || flag4
    })
  }
}

export default GroundInfo 