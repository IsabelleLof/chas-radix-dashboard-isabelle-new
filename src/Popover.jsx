import * as Popover from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./Popover.css";

export const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        style={{
          backgroundColor: "",
          "&:hover": {
            backgroundColor: "#4a5568",
          },
          ringWidth: "2px",
          ringColor: "#9f7aea",
          ringOffsetWidth: "2px",
          ringOffsetColor: "#f7fafc",
          color: "white",
          line: "white",
          fontWeight: "600",
          height: "3rem", // Equivalent to h-12
          borderRadius: "0.375rem", // Equivalent to rounded-lg
          width: "250px", // Equivalent to w-full
          display: "flex",
          alignItems: "center", // Equivalent to items-center
          justifyContent: "center", // Equivalent to justify-center
          "@media (min-width: 640px)": {
            // Equivalent to sm:w-auto
            width: "auto",
          },
        }}
        className="popover-button"
        aria-label="Update dimensions"
      >
        Jan 20, 2023 - Feb 09, 2023
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className="PopoverContent" sideOffset={5}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p className="Text" style={{ marginBottom: 10 }}>
            Dimensions
          </p>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="width">
              Width
            </label>
            <input className="Input" id="width" defaultValue="100%" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxWidth">
              Max. width
            </label>
            <input className="Input" id="maxWidth" defaultValue="300px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="height">
              Height
            </label>
            <input className="Input" id="height" defaultValue="25px" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="maxHeight">
              Max. height
            </label>
            <input className="Input" id="maxHeight" defaultValue="none" />
          </fieldset>
        </div>
        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="PopoverArrow" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
