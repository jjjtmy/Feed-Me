import { useState } from "react";
import {
  IconButton,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import ResultListItem from "./ResultListItem";

const TOKEN = import.meta.env.VITE_API_KEY;
const BASE_URL =
  "https://api.airtable.com/v0/appP9vfckMuV8QzU5/Saved%20Meal%20Plans";

export default function ResultList({
  resultListBreakfast,
  resultListLunch,
  resultListDinner,
  handleRefreshBreakfast,
  handleRefreshLunch,
  handleRefreshDinner,
  chosenDay,
}) {
  const [mealPlan, setMealPlan] = useState({
    Day: "",
    BreakfastID: "",
    BreakfastTitle: "",
    BreakfastImage: "",
    LunchID: "",
    LunchTitle: "",
    LunchImage: "",
    DinnerID: "",
    DinnerTitle: "",
    DinnerImage: "",
  });

  const [selectedMeal, setSelectedMeal] = useState({
    BreakfastID: null,
    LunchID: null,
    DinnerID: null,
  });

  const selectMeal = (mealType, id, title, image) => {
    setMealPlan((prevMealPlan) => ({
      ...prevMealPlan,
      Day: chosenDay,
      [`${mealType}ID`]: id,
      [`${mealType}Title`]: title,
      [`${mealType}Image`]: image,
    }));
    setSelectedMeal((prevSelectedMeal) => ({
      ...prevSelectedMeal,
      [`${mealType}ID`]: id,
    }));
  };

  const checkIfMealPlanExists = async (date) => {
    const response = await fetch(
      `${BASE_URL}?filterByFormula={Day}='${date}'`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    const jsonData = await response.json();
    return jsonData.records.length > 0 ? jsonData.records[0] : null;
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const createMealPlan = async () => {
    const existingMealPlan = await checkIfMealPlanExists(mealPlan.Day);
    if (existingMealPlan) {
      // Update existing meal plan
      const response = await fetch(`${BASE_URL}/${existingMealPlan.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          fields: mealPlan,
        }),
      });
      await response.json();
      onOpen();
    } else {
      // Create new meal plan
      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          fields: mealPlan,
        }),
      });
      await response.json();
      onOpen();
    }
  };

  return (
    <div>
      <ul>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "10px 0 5px 0",
            minWidth: "300px",
          }}
        >
          <h2>BREAKFAST</h2>
          <IconButton
            onClick={handleRefreshBreakfast}
            aria-label="Get more breakfast options"
            size="xs"
            icon={<RepeatIcon boxSize={4} />}
          />
        </div>
        <div style={{ display: "flex" }}>
          {resultListBreakfast.length < 3
            ? "Please expand your search criteria"
            : resultListBreakfast.map((recipe) => (
                <ResultListItem
                  key={recipe.id}
                  eachResult={recipe}
                  selectMeal={() =>
                    selectMeal(
                      "Breakfast",
                      recipe.id,
                      recipe.title,
                      recipe.image
                    )
                  }
                  isSelected={selectedMeal.BreakfastID === recipe.id}
                />
              ))}
        </div>
      </ul>

      <ul>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "10px 0 5px 0",
          }}
        >
          <h2>LUNCH</h2>
          <IconButton
            onClick={handleRefreshLunch}
            aria-label="Get more lunch options"
            size="xs"
            icon={<RepeatIcon boxSize={4} />}
          />
        </div>
        <div style={{ display: "flex" }}>
          {resultListLunch.length < 3
            ? "Please expand your search criteria"
            : resultListLunch.map((recipe) => (
                <ResultListItem
                  key={recipe.id}
                  eachResult={recipe}
                  selectMeal={() =>
                    selectMeal("Lunch", recipe.id, recipe.title, recipe.image)
                  }
                  isSelected={selectedMeal.LunchID === recipe.id}
                />
              ))}
        </div>
      </ul>

      <ul>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            padding: "10px 0 5px 0",
          }}
        >
          <h2>DINNER</h2>
          <IconButton
            onClick={handleRefreshDinner}
            aria-label="Get more dinner options"
            size="xs"
            icon={<RepeatIcon boxSize={4} />}
          />
        </div>
        <div style={{ display: "flex" }}>
          {resultListDinner.length < 3
            ? "Please expand your search criteria"
            : resultListDinner.map((recipe) => (
                <ResultListItem
                  key={recipe.id}
                  eachResult={recipe}
                  selectMeal={() =>
                    selectMeal("Dinner", recipe.id, recipe.title, recipe.image)
                  }
                  isSelected={selectedMeal.DinnerID === recipe.id}
                />
              ))}
        </div>
      </ul>

      <Button
        onClick={() => {
          if (!mealPlan.BreakfastID || !mealPlan.LunchID || !mealPlan.DinnerID)
            setIsAlertOpen(true);
          else {
            createMealPlan();
          }
        }}
        colorScheme="teal"
        variant="solid"
        margin="10px"
      >
        Save Meal Plan
      </Button>

      <Modal isOpen={isAlertOpen} onClose={() => setIsAlertOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Missing Selections</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Please select all meals</ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => setIsAlertOpen(false)}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Meal Plan Saved</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Successfully saved your meal plan</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
