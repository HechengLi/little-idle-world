import test6 from '../../images/test6.jpg'
import { entityCategory } from 'common-data/entity'

const road1 = {
  x: 0.25, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '小路1', link: `road1`,
  entities: [
    { name: '史莱姆', image: test6, category: entityCategory.MONSTER }
  ]
}
const road2 = {
  x: 0.5, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '小路2', link: `road2`,
  entities: []
}
const road3 = {
  x: 0.75, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '小路3', link: `road3`,
  entities: []
}
const tree1 = {
  x: 0.25, y: 0.65, height: 0.1, width: 0.1, type: 'percentage', text: '小树1', link: `tree1`,
  entities: []
}
const tree2 = {
  x: 0.3, y: 0.17, height: 0.1, width: 0.1, type: 'percentage', text: '小树2', link: `tree2`,
  entities: []
}
const tree3 = {
  x: 0.7, y: 0.75, height: 0.1, width: 0.1, type: 'percentage', text: '小树3', link: `tree3`,
  entities: []
}
const plain1 = {
  x: 0.75, y: 0.5, height: 0.1, width: 0.1, type: 'percentage', text: '平地1', link: `plain1`,
  entities: []
}
const plain2 = {
  x: 0.5, y: 0.5, height: 0.2, width: 0.2, type: 'percentage', text: '平地2', link: `plain2`,
  entities: []
}

const entrance = {
  x: 0.15, y: 0.15, height: 0.1, width: 0.1, type: 'percentage', text: '入口', link: '',
  entities: [
    { name: '史莱姆1', image: test6, category: entityCategory.MONSTER },
    { name: '史莱姆2', image: test6, category: entityCategory.MONSTER }
  ],
  path: [road1, road2, road3]
}

road1.path = [entrance, plain1, tree1, plain2]
road2.path = [entrance, tree1, tree2, plain2]
road3.path = [entrance, tree2, tree3, plain2]
tree1.path = [road1, road2]
tree2.path = [road2, road3]
tree3.path = [road3]
plain1.path = [road1]
plain2.path = [road1, road2, road3]

const slimeForest = {
  entrance,
  road1,
  road2,
  road3,
  tree1,
  tree2,
  tree3,
  plain1,
  plain2
}

export default slimeForest