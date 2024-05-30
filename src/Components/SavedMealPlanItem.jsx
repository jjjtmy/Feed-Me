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
  const getRecipeLink = async (id) => {
    if (cache[id]) {
      window.open(cache[id], "_blank");
      return;
    }
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/informationBulk?ids=${id}&apiKey=54ddd5a828fa4d01bf9546fe1d854603`
      );
      const data = await response.json();
      const recipeUrl = data[0].sourceUrl;
      cache[id] = recipeUrl;
      window.open(recipeUrl, "_blank");
    } catch (error) {
      console.error("Error fetching recipe info:", error);
    }
  };

  const history = useHistory();
  const handleEditMealPlan = () => {
    history.push("/");
  };

  return (
    <Card
      variant="filled"
      width="20%"
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
        <div onClick={() => getRecipeLink(eachSave.BreakfastID)}>
          <Text color="teal" fontSize="l" fontWeight="bold">
            Breakfast
          </Text>
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
        </div>

        <div onClick={() => getRecipeLink(eachSave.LunchID)}>
          <Text color="teal" fontSize="l" fontWeight="bold" margin="5px 0 0 0">
            Lunch
          </Text>

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
        </div>

        <div onClick={() => getRecipeLink(eachSave.DinnerID)}>
          <Text color="teal" fontSize="l" fontWeight="bold" margin="5px 0 0 0">
            Dinner
          </Text>
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
        </div>
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
          style={{ height: "90%", margin: "2px auto" }}
          onClick={handleEditMealPlan}
        >
          Edit
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
