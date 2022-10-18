const palette = [
  {
    bgColor: "#acddde",
    tailOptionColor: "#9bcccd",
    cardHeader: "linear-gradient(to right, #acddde, #9bcccd)",
  },
  {
    bgColor: "#caf1de",
    tailOptionColor: "#b9e0cd", //-1
    cardHeader: "linear-gradient(to right, #caf1de, #b9e0cd)",
  },
  {
    bgColor: "#b5dbfc",
    tailOptionColor: "#a4caeb",
    cardHeader: "linear-gradient(to right, #b5dbfc, #a4caeb)",
  },
  {
    bgColor: "#e1f8dc",
    tailOptionColor: "#d0e7cb", //-1
    cardHeader: "linear-gradient(to right, #e1f8dc, #d0e7cb)",
  },
  {
    bgColor: "#fef8dd",
    tailOptionColor: "#ede7cc", //-1
    cardHeader: "linear-gradient(to right, #fef8dd, #ede7cc)",
  },
  {
    bgColor: "#ffe7c7",
    tailOptionColor: "#eed6bb", //-1
    cardHeader: "linear-gradient(to right, #ffe7c7, #eed6bb)",
  },
  {
    bgColor: "#f7d8ba",
    tailOptionColor: "#e6c7a9", //-1
    cardHeader: "linear-gradient(to right, #f7d8ba, #e6c7a9)",
  },
];

function colorToPalette(color) {
  return palette.find((paletteItem) => {
    return paletteItem.bgColor === color;
  });
}
export { palette, colorToPalette };
