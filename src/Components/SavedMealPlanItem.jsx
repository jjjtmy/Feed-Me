import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

const cache = {};

export default function SavedMealPlanItem({ eachSave, deleteMealPlan }) {
  // const [breakfastInfo, setBreakfastInfo] = useState(null);
  // const [lunchInfo, setLunchInfo] = useState(null);
  // const [dinnerInfo, setDinnerInfo] = useState(null);

  // const getRecipeInfo = async (id, setInfo) => {
  //   if (cache[id]) {
  //     setInfo(cache[id]);
  //     return;
  //   }
  //   try {
  //     const response = await fetch(
  //       `https://api.spoonacular.com/recipes/informationBulk?ids=${id},${id}/?apiKey=54ddd5a828fa4d01bf9546fe1d854603`
  //     );
  //     const data = await response.json();
  //     cache[id] = data;
  //     setInfo(data);
  //   } catch (error) {
  //     console.error("Error fetching recipe info:", error);
  //   }
  // };

  // useEffect(() => {
  //   getRecipeInfo(eachSave.BreakfastID, setBreakfastInfo);
  //   getRecipeInfo(eachSave.LunchID, setLunchInfo);
  //   getRecipeInfo(eachSave.DinnerID, setDinnerInfo);
  // }, [eachSave]);

  const history = useHistory();
  const handleEditMealPlan = () => {
    history.push("/");
  };

  return (
    <Card
      variant="filled"
      maxW="30%"
      justify-content="center"
      bg="lighteal"
      margin="10px"
    >
      <CardHeader>
        <Heading size="md" margin="0 0 -30px 0">
          {eachSave.Day}
        </Heading>
      </CardHeader>
      <CardBody>
        <p>
          <Text color="teal" fontSize="l" fontWeight="bold">
            Breakfast
          </Text>
          {/* <a href={breakfastInfo.sourceUrl} target="_blank"> */}
          <img
            src={eachSave.BreakfastImage}
            alt={eachSave.BreakfastTitle}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
            }}
          />
          <Text color="black" fontSize="s" style={{ lineHeight: "18px" }}>
            {eachSave.BreakfastTitle}
          </Text>
        </p>
        <p>
          <Text color="teal" fontSize="l" fontWeight="bold" margin="5px 0 0 0">
            Lunch
          </Text>
          {/* {lunchInfo ? (
            <a href={lunchInfo.sourceUrl} target="_blank"> */}
          <img
            src={eachSave.LunchImage}
            alt={eachSave.LunchTitle}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
            }}
          />
          <Text color="black" fontSize="s" style={{ lineHeight: "18px" }}>
            {eachSave.LunchTitle}
          </Text>
        </p>

        <p>
          <Text color="teal" fontSize="l" fontWeight="bold" margin="5px 0 0 0">
            Dinner
          </Text>
          {/* {dinnerInfo ? (
            <a href={dinnerInfo.sourceUrl} target="_blank"> */}
          <img
            src={eachSave.DinnerImage}
            alt={eachSave.DinnerTitle}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              margin: "auto",
            }}
          />
          <Text color="black" fontSize="s" style={{ lineHeight: "18px" }}>
            {eachSave.DinnerTitle}
          </Text>
        </p>

        {/* <p>
          <Text color="teal" fontSize="l" fontWeight="bold">
            Breakfast
          </Text>
          {breakfastInfo ? (
            <a href={breakfastInfo.sourceUrl} target="_blank">
              <img
                src={breakfastInfo.image}
                alt={breakfastInfo.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto",
                }}
              />
              <Text color="black" fontSize="s" style={{ lineHeight: "18px" }}>
                {breakfastInfo.title}
              </Text>
            </a>
          ) : (
            "Loading..."
          )}
        </p>
        <p>
          <Text color="teal" fontSize="l" fontWeight="bold" margin="5px 0 0 0">
            Lunch
          </Text>
          {lunchInfo ? (
            <a href={lunchInfo.sourceUrl} target="_blank">
              <img
                src={lunchInfo.image}
                alt={lunchInfo.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto",
                }}
              />
              <Text color="black" fontSize="s" style={{ lineHeight: "18px" }}>
                {lunchInfo.title}
              </Text>
            </a>
          ) : (
            "Loading..."
          )}
        </p>

        <p>
          <Text color="teal" fontSize="l" fontWeight="bold" margin="5px 0 0 0">
            Dinner
          </Text>
          {dinnerInfo ? (
            <a href={dinnerInfo.sourceUrl} target="_blank">
              <img
                src={dinnerInfo.image}
                alt={dinnerInfo.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  margin: "auto",
                }}
              />
              <Text color="black" fontSize="s" style={{ lineHeight: "18px" }}>
                {dinnerInfo.title}
              </Text>
            </a>
          ) : (
            "Loading..."
          )}{" "}
        </p> */}
      </CardBody>
      <CardFooter
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "-30px 0 5px 0",
        }}
      >
        <Button
          variant="solid"
          colorScheme="teal"
          style={{ height: "90%", width: "80%", margin: "5px" }}
          onClick={handleEditMealPlan}
        >
          Edit Meal Plan
        </Button>
        <Button
          variant="solid"
          colorScheme="teal"
          style={{ height: "90%" }}
          onClick={() => deleteMealPlan(eachSave.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
