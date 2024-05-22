import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";

export default function SearchForm({ performSearch }) {
  const [sliderValueCarb, setSliderValueCarb] = useState([]);
  const [sliderValueProtein, setSliderValueProtein] = useState([]);
  const [sliderValueFat, setSliderValueFat] = useState([]);
  const [mealType, setMealType] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch(
      `&minCarbs=${sliderValueCarb[0]}&maxCarbs=${sliderValueCarb[1]}&minProtein=${sliderValueProtein[0]}&maxProtein=${sliderValueProtein[1]}&minFat=${sliderValueFat[0]}&maxFat=${sliderValueFat[1]}&type=${mealType}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Carbohydrate</h3>
      <RangeSlider
        min={0}
        max={100}
        step={10}
        defaultValue={[50, 70]}
        onChangeEnd={(val) => setSliderValueCarb(val)}
      >
        <RangeSliderTrack bg="pink">
          <RangeSliderFilledTrack bg="red" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={5} index={0} />
        <RangeSliderThumb boxSize={5} index={1} />
      </RangeSlider>
      <div>
        min:{sliderValueCarb[0]} max:{sliderValueCarb[1]}
      </div>
      <h3>Protein</h3>
      <RangeSlider
        min={0}
        max={60}
        step={5}
        defaultValue={[20, 40]}
        onChangeEnd={(val) => setSliderValueProtein(val)}
      >
        <RangeSliderTrack bg="pink">
          <RangeSliderFilledTrack bg="red" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={5} index={0} />
        <RangeSliderThumb boxSize={5} index={1} />
      </RangeSlider>
      <div>
        min:{sliderValueProtein[0]} max:{sliderValueProtein[1]}
      </div>
      <h3>Fat</h3>
      <RangeSlider
        min={0}
        max={30}
        step={5}
        defaultValue={[5, 15]}
        onChangeEnd={(val) => setSliderValueFat(val)}
      >
        <RangeSliderTrack bg="pink">
          <RangeSliderFilledTrack bg="red" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={5} index={0} />
        <RangeSliderThumb boxSize={5} index={1} />
      </RangeSlider>
      <div>
        min:{sliderValueFat[0]} max:{sliderValueFat[1]}
      </div>

      <Select
        placeholder="Select meal type"
        onChange={(event) => setMealType(event.target.value)}
      >
        <option value="breakfast">Breakfast</option>
        <option value="main course">Main Course</option>
        <option value="snack">Snack</option>
      </Select>
      <button type="submit">Feed Me!</button>
    </form>
  );
}
