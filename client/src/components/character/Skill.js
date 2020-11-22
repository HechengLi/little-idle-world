import React from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import SecondaryNav from '../SecondaryNav'
import SkillIcon from './skill/SkillIcon'

const SkillView = ({ className, skills }) => {
  const { skillType } = useParams()
  const selectedSkills = skills[skillType]

  if (!selectedSkills) return <p>未知修炼</p>

  return (
    <React.Fragment>
      <p>修炼值: {selectedSkills.mastery}</p>
      {
        selectedSkills.skills.length === 0
        ? <p>未发现任何技能</p>
        : <div className={className}>
            {
              selectedSkills.skills.map(skill =>
                <SkillIcon key={skill.name} skill={skill} />
              )
            }
          </div>
      }
    </React.Fragment>
  )
}

const StyledSkillView = styled(SkillView)`
  height: 100%;
  display: flex;
`

const mapStateToProps = state => ({
  skills: state.skills
})

const ReduxSkillView = connect(
  mapStateToProps
)(StyledSkillView)

const routes = [
  { name: '拳修', path: 'fist' },
  { name: '剑修', path: 'sword' },
  { name: '其他', path: 'etc' }
]

const Skill = ({ className }) => {
  const { path } = useRouteMatch()

  return (
    <div className={className}>
      <SecondaryNav routes={routes} />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/fist`} />
        </Route>
        <Route path={`${path}/:skillType`} component={ReduxSkillView} />
      </Switch>
    </div>
  )
}

const StyledSkill = styled(Skill)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default StyledSkill
