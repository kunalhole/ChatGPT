"use client"
import useSWR from "swr"
import Select from "react-select"

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json())
const ModelSelection = () => {
  const { data: models, isLoading } = useSWR("models", fetchModels)

  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "text-davinci-003",
  })
  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultInputValue={model}
        placeholder={model}
        isLoading={isLoading}
        isSearchable
        menuPosition="fixed"
        // onChange={(e) => setModel(e.value): Props}
      />
    </div>
  )
}

export default ModelSelection
