import React from "react";
import { useTranslation } from "react-i18next";
import { ToggleSwitch } from "../ui/ToggleSwitch";
import { useSettings } from "../../hooks/useSettings";

interface CancelShortcutToggleProps {
  descriptionMode?: "inline" | "tooltip";
  grouped?: boolean;
}

export const CancelShortcutToggle: React.FC<CancelShortcutToggleProps> =
  React.memo(({ descriptionMode = "tooltip", grouped = false }) => {
    const { t } = useTranslation();
    const { getSetting, updateSetting, isUpdating } = useSettings();
    const enabled = getSetting("cancel_shortcut_enabled") ?? true;

    return (
      <ToggleSwitch
        checked={enabled}
        onChange={(value) => updateSetting("cancel_shortcut_enabled", value)}
        isUpdating={isUpdating("cancel_shortcut_enabled")}
        label={t("settings.general.cancelShortcut.label")}
        description={t("settings.general.cancelShortcut.description")}
        descriptionMode={descriptionMode}
        grouped={grouped}
      />
    );
  });
