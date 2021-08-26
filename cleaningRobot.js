// In this simple problem the world includes both the environment and the robot
// but in most problems the environment and world would be separate
class World {
	constructor(numFloors) {
		this.location = 0;
		this.floors = [];
		this.numFloors = numFloors
		for (let i = 0; i < numFloors; i++) {
			this.floors.push({ dirty: false, wet: false });
		}
		this.lastClean;
	}

	markFloorDirty(floorNumber) {
		if (this.floors[floorNumber].dirty) return true
		this.floors[floorNumber].wet = false;
		this.floors[floorNumber].dirty = true;
		return false
	}

	markFloorWet (floorNumber) {
		if (this.floors[floorNumber].wet) return true
		this.floors[floorNumber].dirty = false;
		this.floors[floorNumber].wet = true;
		return false
	}

	simulate(action) {
		if (action.name === 'SUCK') this.floors[this.location].dirty = false;
		else if (action.name === 'DRY') this.floors[this.location].wet = false;
		else this.location = action.to
		return action;
	}
}


// Rules are defined in code
function reflexVacuumAgent(world) {
	/* Always clear dirty actual location */
	if (world.floors[world.location].dirty) { return { name: 'SUCK' } }
	else if (world.floors[world.location].wet) { return { name: 'DRY' } }
	else if (world.location == 0) { return {name: 'RIGHT', to: 1} }
	else if (world.location == 1) { return {name: 'DOWN', to: 3} }
	else if (world.location == 2) { return {name: 'UP', to: 0} }
	else if (world.location == 3) { return {name: 'LEFT', to: 2} }
	return { name: 'WAIT', to: 0 }
}

// Rules are defined in data, in a table indexed by [location][dirty]
function tableVacuumAgent(world, table) {
	let location = world.location;
	let dirty = world.floors[location].dirty ? 1 : 0;
	return table[location][dirty];
}
