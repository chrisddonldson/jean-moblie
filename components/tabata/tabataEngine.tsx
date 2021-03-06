import React, { FunctionComponent } from "react";

import styled from "styled-components/native";
import { Drill } from "./SampleDrills";
// import { Button } from "./Button"
// import beepSfx from "../../static/low_alch.mp3"
// import horraySfx from "../../static/horay.mp3"
// import useSound from "use-sound"
import { colours } from "../../colours";
import { Button } from "react-native";

interface TabataEngineInterface {
  drill: Drill;
}

export const TabataEngine: FunctionComponent<TabataEngineInterface> = ({
  drill,
}) => {
  let [isRunning, setIsRunning] = React.useState(false);
  let [isFinished, setIsFinished] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(drill.rounds[0].length);
  let [roundIndex, setRoundIndex] = React.useState(0);
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  // const [beep] = useSound(beepSfx, {
  //   playbackRate,
  //   volume: 0.5,
  // })

  // const [horay] = useSound(horraySfx)
  function tick() {
    if (isRunning) {
      setTimeLeft(timeLeft - 1);

      if (timeLeft - 1 < 0) {
        //increment the round
        if (roundIndex + 1 < drill.rounds.length) {
          setRoundIndex(roundIndex + 1);
          setTimeLeft(drill.rounds[roundIndex + 1].length);
          // beep()
        } else {
          setIsFinished(true);
          setRoundIndex(0);
          setIsRunning(false);
          // horay()
        }
      }
    }
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      tick();
    }, 1000);

    return () => clearTimeout(timer);
  });
  let color = colours.green;

  switch (drill.rounds[roundIndex].type) {
    case "WORK":
      // code block
      color = colours.red;
      break;
    case "REST":
      color = colours.blue;
      // code block
      break;
    case "PREPARE":
      color = colours.green;
      // code block
      break;
    default:
    // code block
  }

  return (
    <Container color={color}>
      <Top>
        {isFinished ? (
          <Timer>Finished!</Timer>
        ) : (
          <React.Fragment>
            <Exercise>{drill.rounds[roundIndex].type}</Exercise>
            <Timer>{timeLeft}s</Timer>
            <Exercise>{drill.rounds[roundIndex].exrcise}</Exercise>
            <Exercise>
              {(+(roundIndex / drill.rounds.length) * 100).toFixed(0)}%
            </Exercise>
          </React.Fragment>
        )}
      </Top>
      <Bottom>
        <Button
          title={"Start"}
          onPress={() => {
            setIsRunning(true);
          }}
          disabled={isRunning}
        />

        <Button
          title={"Pause"}
          onPress={() => {
            setIsRunning(false);
          }}
          disabled={!isRunning}
        />
        <Button
          title={"Reset"}
          onPress={() => {
            setIsRunning(false);
            setTimeLeft(drill.rounds[0].length);
            setRoundIndex(0);
            setIsFinished(false);
          }}
          disabled={false}
        />
      </Bottom>
    </Container>
  );
};

const Timer = styled.Text`
  color: white;
  font-size: 64px;
  text-align: center;
`;

const Exercise = styled.Text`
  color: white;
  font-size: 32px;
  text-align: center;
`;

interface ContainerI {
  color: string;
}
const Container = styled.View<ContainerI>`
  background-color: ${(props) => props.color};
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
`;

const Top = styled.View`
  flex: 6;
`;
const Bottom = styled.View`
  flex: 1;
  display: flex;
  align-content: space-around;
  padding-bottom: 16px;
  flex-direction: row;
`;
