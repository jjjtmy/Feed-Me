import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
} from "@chakra-ui/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState } from "react";

export default function SearchForm({ performSearch, getDay }) {
  //update state of each search criteria
  const [sliderValueCarb, setSliderValueCarb] = useState([50, 70]);
  const [sliderValueProtein, setSliderValueProtein] = useState([20, 40]);
  const [sliderValueFat, setSliderValueFat] = useState([5, 15]);
  const [day, setDay] = useState();

  //submit path to fetch api based on search criteria
  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(
      `&minCarbs=${sliderValueCarb[0]}&maxCarbs=${sliderValueCarb[1]}&minProtein=${sliderValueProtein[0]}&maxProtein=${sliderValueProtein[1]}&minFat=${sliderValueFat[0]}&maxFat=${sliderValueFat[1]}`
    );
    getDay(`${day.toDateString()}`);
  };

  return (
    <div
      style={{
        backgroundColor: "lightgrey",
        width: "40%",
        minWidth: "300px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <DayPicker mode="single" selected={day} onSelect={setDay} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto",
            width: "80%",
          }}
        >
          {" "}
          <h3
            style={{
              margin: "5px auto",
              lineHeight: "15px",
              fontWeight: "bold",
            }}
          >
            Target nutrients per meal:
          </h3>
          <div
            className="carbs"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>Carbohydrate</span>
            <span>
              {sliderValueCarb[0]}g to {sliderValueCarb[1]}g
            </span>
          </div>
          <RangeSlider
            min={0}
            max={100}
            step={10}
            defaultValue={[50, 70]}
            onChangeEnd={(val) => setSliderValueCarb(val)}
          >
            <RangeSliderTrack bg="white">
              <RangeSliderFilledTrack bg="teal" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={5} index={0} />
            <RangeSliderThumb boxSize={5} index={1} />
          </RangeSlider>
          <div
            className="protein"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Protein</span>
            <span>
              {sliderValueProtein[0]}g to {sliderValueProtein[1]}g
            </span>
          </div>
          <RangeSlider
            min={0}
            max={60}
            step={5}
            defaultValue={[20, 40]}
            onChangeEnd={(val) => setSliderValueProtein(val)}
          >
            <RangeSliderTrack bg="white">
              <RangeSliderFilledTrack bg="teal" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={5} index={0} />
            <RangeSliderThumb boxSize={5} index={1} />
          </RangeSlider>
          <div
            className="fat"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>Fat</span>
            <span>
              {sliderValueFat[0]}g to {sliderValueFat[1]}g
            </span>
          </div>
          <RangeSlider
            min={0}
            max={30}
            step={5}
            defaultValue={[5, 15]}
            onChangeEnd={(val) => setSliderValueFat(val)}
          >
            <RangeSliderTrack bg="white">
              <RangeSliderFilledTrack bg="teal" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={5} index={0} />
            <RangeSliderThumb boxSize={5} index={1} />
          </RangeSlider>
        </div>
        <Button colorScheme="teal" variant="solid" type="submit" margin="20px">
          Feed Me!
        </Button>
      </form>
    </div>
  );
}
