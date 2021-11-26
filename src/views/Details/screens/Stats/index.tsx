import React, { useState, useEffect } from "react";
import api from "services/api";

import {
  Container,
  Title,
  SectionStats,
  StatHp,
  StatAttack,
  StatDefense,
  StatSpecialAttack,
  StatSpecialDefense,
  StatSpeed,
  Percentage
} from "./styles";

import iconTypes from "assets/types";
import theme from "styles/theme";

interface statsProps {
  id: string;
  name?: string;
  bgColor: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
  };
}

interface Props {
  name?: string;
}

export function Stats({ name }: Props){
  const [stats, setStats] = useState({} as statsProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`)
      .then((response) => {

        const {
          id,
          types,
          stats,
        } = response.data;

        let bgColor: keyof typeof iconTypes = types[0].type.name;

        if (types.length > 1 && types[0].type.name === "normal") {
          bgColor = types[1].type.name;
        }

        setStats({
          id,
          name,
          bgColor: theme.colors.type[bgColor],
          stats: {
            hp: stats[0].base_stat,
            attack: stats[1].base_stat,
            defense: stats[2].base_stat,
            specialAttack: stats[3].base_stat,
            specialDefense: stats[4].base_stat,
            speed: stats[5].base_stat,
          },
        });

      })
  }, [name]);

  return (
    <Container>
      <Title color={stats.bgColor}>{name} Stats</Title>
      <SectionStats>
          <span>
            HP
            <Percentage>
              <StatHp percentageHp={stats?.stats?.hp}></StatHp>
              <div className="number">
                {stats?.stats?.hp}%
              </div>
            </Percentage>
          </span>
          <span>
            ATTACK
            <Percentage>
              <StatAttack percentageAtk={stats?.stats?.attack}></StatAttack>
              <div className="number">
                {stats?.stats?.attack}%
              </div>
            </Percentage>
          </span>
          <span>
            DEFENSE
            <Percentage>
              <StatDefense percentageDf={stats?.stats?.defense}></StatDefense>
              <div className="number">
                {stats?.stats?.defense}%
              </div>
            </Percentage>
          </span>
          <span>
            SPECIAL ATTACK
            <Percentage>
              <StatSpecialAttack percentageSatk={stats?.stats?.specialAttack}></StatSpecialAttack>
              <div className="number">
                {stats?.stats?.specialAttack}%
              </div>
            </Percentage>
          </span>
          <span>
            SPECIAL DEFENSE
            <Percentage>
              <StatSpecialDefense percentageSdf={stats?.stats?.specialDefense}></StatSpecialDefense>
              <div className="number">
                {stats?.stats?.specialDefense}%
              </div>
            </Percentage>
          </span>
          <span>
            SPEED
            <Percentage>
              <StatSpeed percentageSp={stats?.stats?.speed}></StatSpeed>
              <div className="number">
                {stats?.stats?.speed}%
              </div>
            </Percentage>
          </span>
      </SectionStats>
    </Container>
  );
}