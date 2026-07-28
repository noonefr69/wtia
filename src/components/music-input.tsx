"use client";

import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export default function MediaInput() {
  const [media, setMedia] = useState<null | FileList>(null);

  console.log(media);
  return (
    <div>
      <Label htmlFor="media_input">tab</Label>
      <Input
        onChange={(e) => setMedia(e.target.files)}
        type="file"
        id="media_input"
        name="media_input"
        className="hidden"
        accept="audio/*"
        multiple
        {...{ webkitdirectory: "true" }}
      />
    </div>
  );
}
