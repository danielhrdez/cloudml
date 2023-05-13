import CSVInput from "../input/CSVInput";
import NumberInput from "../input/NumberInput";
import Form from "../Form";
import { createModelFromFile } from "../../hooks/createPredictionFromFile";

// TODO: Add state management
// TODO: Add ROC curve visualization
export function TrainModel() {
  const { model, setFile, trainSplit, setTrainSplit } = createModelFromFile();
  return (
    <Form title="Train Model" outputTitle="Accuracy %: " output="61">
      <label>Data</label>
      <CSVInput onChange={(e) => setFile(() => e.target.files![0])} />
      <label for="train-pct">Train/Test split %:</label>
      <NumberInput
        id="train-pct"
        value={trainSplit()}
        min="60"
        max="90"
        onChange={(value) => setTrainSplit(() => value)}
      />
    </Form>
  );
}