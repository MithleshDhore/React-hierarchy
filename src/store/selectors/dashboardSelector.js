import isEmpty from 'lodash/isEmpty';

const dashboardSelector = state => state.dashboard;
const hierarchySelector = state => createDataTree(state.dashboard.hierarchy.apiResponse.result)

const createDataTree = dataset => {
    if (!isEmpty(dataset)) {
        let hashTable = Object.create(null)
        dataset.forEach(aData => hashTable[aData.sys_id] = { ...aData, childNodes: [] })
        let dataTree = []
        dataset.forEach(aData => {
            if (aData.parent.value) hashTable[aData.parent.value].childNodes.push(hashTable[aData.sys_id])
            else dataTree.push(hashTable[aData.sys_id])
        })
        return dataTree
    }
}

export {
    dashboardSelector,
    hierarchySelector,
};