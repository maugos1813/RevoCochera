import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function Clock() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          "TimePicker",
          "MobileTimePicker",
          "DesktopTimePicker",
          "StaticTimePicker",
        ]}
      >
        <div className="w-full flex justify-center items-center p-5">
          <DemoItem
            label={
              <div className="flex items-center gap-4">
                <span className="text-[20px] text-center">
                  Hora de Entrada:
                </span>
                <div className="border border-black">
                  <TimePicker defaultValue={dayjs("2022-04-17T15:30")} />
                </div>
              </div>
            }
          ></DemoItem>
        </div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
