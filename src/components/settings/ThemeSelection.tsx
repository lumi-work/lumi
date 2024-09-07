import React from "react";
import { RadioGroup, Radio, useRadio, VisuallyHidden, cn } from "@nextui-org/react";
import Image from "next/image";

import DarkTheme from "../../../public/dark_theme.png";
import LightTheme from "../../../public/light_theme.png";

export const CustomRadio = (props: any) => {
  const { Component, children, isSelected, description, getBaseProps, getWrapperProps, getInputProps, getLabelProps, getLabelWrapperProps, getControlProps } = useRadio(props);

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        "group inline-flex items-center hover:opacity-70 active:opacity-50 justify-between flex-row-reverse tap-highlight-transparent",
        "max-w-[300px] cursor-pointer border-2 border-default rounded-lg gap-4 p-4",
        "data-[selected=true]:border-primary"
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()}>
        {description && <span className="text-small text-foreground opacity-70 text-center mb-2">{description}</span>}
        {children && <span {...getLabelProps()}>{children}</span>}
      </div>
    </Component>
  );
};

export default function ThemeSelection() {
  return (
    <RadioGroup defaultValue={"Light"}>
      <div className="flex items-center gap-4">
        <CustomRadio description="Light" value="Light">
          <Image src={LightTheme} width={200} height={200} alt="light_theme" />
        </CustomRadio>
        <CustomRadio description="Dark" value="Dark">
          <Image src={DarkTheme} width={200} height={200} alt="dark_theme" />
        </CustomRadio>
      </div>
    </RadioGroup>
  );
}
