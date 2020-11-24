import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

import SecondaryNav from '../SecondaryNav'
import SkillIcon from './skill/SkillIcon'
import { skillCategory, skillCategoryReverseMap } from 'common-data'

const SkillView = ({ className, skills, mastery }) => {
  const { skillCategory } = useParams()
  const selectedSkills = skills[skillCategory]

  if (!selectedSkills) return <p>未知修炼</p>

  return (
    <React.Fragment>
      <p>修炼值: {mastery[skillCategory]}</p>
      {
        selectedSkills.length === 0
        ? <p>未发现任何技能</p>
        : <div className={className}>
            {
              selectedSkills.map(skill =>
                <SkillIcon key={skill.name} skill={skill} />
              )
            }
          </div>
      }
    </React.Fragment>
  )
}

const StyledSkillView = styled(SkillView)`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
`

const routes = [
  { name: '拳修', path: skillCategoryReverseMap[skillCategory.FIST] },
  { name: '剑修', path: skillCategoryReverseMap[skillCategory.SWORD] }
]

const Skill = ({ className, skills, mastery }) => {
  const { path } = useRouteMatch()

  const memoizedSkill = useMemo(() => {
    const skillsFiltered = {}
    Object.values(skillCategory).forEach(key => {
      skillsFiltered[skillCategoryReverseMap[key]] = []
    })
    skills.forEach(item => {
      skillsFiltered[skillCategoryReverseMap[item.category]].push(item)
    })
    return skillsFiltered
  }, [skills])

  const memoizedMastery = useMemo(() => {
    const masteryFiltered = {}
    Object.values(skillCategory).forEach(key => {
      masteryFiltered[skillCategoryReverseMap[key]] = mastery[key]
    })
    return masteryFiltered
  }, [mastery])

  return (
    <div className={className}>
      <SecondaryNav routes={routes} />
      <Switch>
        <Route exact path={`${path}`}>
          <Redirect to={`${path}/fist`} />
        </Route>
        <Route path={`${path}/:skillCategory`} render={ () => <StyledSkillView skills={memoizedSkill} mastery={memoizedMastery} /> } />
      </Switch>
    </div>
  )
}

const StyledSkill = styled(Skill)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const mapStateToProps = state => ({
  skills: state.skills.list,
  mastery: state.skills.mastery
})

export default connect(
  mapStateToProps
)(StyledSkill)
