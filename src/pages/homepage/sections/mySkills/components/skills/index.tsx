import styled from "styled-components"
import SkillsItem from "./SkillsItem";
import SkillGroup from "./SkillGroup";

import logo_js from "./img/js.png";
import logo_typescript from "./img/ts.png";
import logo_sass from "./img/sass.png";
import logo_figma from "./img/figma.png";
import logo_php from "./img/php.png";
import logo_java from "./img/java.png";
import logo_react from "./img/react.png";
import logo_wordpress from "./img/wordpress.png";
import logo_photoshop from "./img/photoshop.png";
import logo_illustrator from "./img/illustrator.png";
import logo_mysql from "./img/mysql.png";
import logo_mongo from "./img/mongo.png";

export default function Skills() {
  return (
    <SkillsContainer>
       <SkillGroup title="Proficient">
         <SkillsItem img={logo_react} description="React"/>
         <SkillsItem img={logo_typescript} description="TypeScript"/>
         <SkillsItem img={logo_js} description="JavaScript"/>
         <SkillsItem img={logo_sass} description="Sass"/>
       </SkillGroup>
       <SkillGroup title="Knowledge of">
         <SkillsItem img={logo_mysql} description="MySQL"/>
         <SkillsItem img={logo_mongo} description="MongoDB"/>
         <SkillsItem img={logo_java} description="Java"/>
         <SkillsItem img={logo_php} description="php"/>
         <SkillsItem img={logo_wordpress} description="Wordpress"/>
       </SkillGroup>
       <SkillGroup title="Other tools">
         <SkillsItem img={logo_photoshop} description="Photoshop"/>
         <SkillsItem img={logo_illustrator} description="Illustrator"/>
         <SkillsItem img={logo_figma} description="Figma"/>
       </SkillGroup>
    </SkillsContainer>
  )
}

const SkillsContainer = styled.div`
   width: 100%;
`
