
import React from 'react';

import {Nav, NavLeft, NavItem, NavCenter,NavRight, Container,Tab, Tabs, TabList,TabLink, HeroBody, HeroFooter, Title , Hero, HeroHeader, Icon } from 'bloomer'




export default function Form() {
    return (




<Hero isColor='info' isSize='medium'>     

<HeroBody>
    <Container hasTextAlign='centered'>
        <Title>Title</Title>
    </Container>
</HeroBody>


<HeroFooter>
    <Tabs isBoxed isFullWidth>
        <Container>
            <TabList>
                <Tab isActive><TabLink>Overview</TabLink></Tab>
                <Tab><TabLink>Grid</TabLink></Tab>
                <Tab><TabLink>Element</TabLink></Tab>
                <Tab><TabLink>Components</TabLink></Tab>
                <Tab><TabLink>Layout</TabLink></Tab>
            </TabList>
        </Container>
    </Tabs>
</HeroFooter>
</Hero>

    )}



