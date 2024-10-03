"use client";
import React from "react";
import { Button } from "../ui/moving-border";

export function MovingBorder() {
  return (
    (<div>
      <Button
        borderRadius="1.75rem"
        className="bg-slate-900 text-white border-slate-800">
        Let's Talk
      </Button>
    </div>)
  );
}
