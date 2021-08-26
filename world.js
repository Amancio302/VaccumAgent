export default class {
	constructor (rules, numStages) {
    this.rules = rules;
    this.position = 0;
    this.stages = []
    for (let i = 0; i < 4; i++) {
      this.stages[i] = { dirty: false }
    }
  }

  move () {
    
  }
}

position = [{ dirty: false, wet: false }, { dirty: false, wet: false }, { dirty: false, wet: false }, { dirty: false, wet: false }]
rules = [{ dirty, wet }, {  }, {  }, {  }]

function dirty (isDirty) {
  return isDirty ? 'SUCK' : 'NEXT'
}

function wet (isWet) {
  return isWet ? 'DRY' : 'NEXT'
}