import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CustomCard from "./CustomCard";
import RecipeReviewCard from "../components/ComplexCard";
import AvatarChips from "../components/AvatarChip";
import MUIForm from "../components/MUIForm";
import SxExample from "./SxExample";

// layout cards in a grid
export default function BasicGrid() {
  // Outermost Grid is a container
  return (
    <Grid container spacing={2} my={2}>
      {/* Inner Grids (columns) are items */}
      <Grid item xs={8}>
        <MUIForm></MUIForm>
      </Grid>
      <Grid item xs={4}>
        <SxExample></SxExample>
      </Grid>
      <Grid item xs={4}>
        {" "}
        {/* use 4/12 columns on xs screens up */}
        <CustomCard title="First Column" buttontext="This">
          First column is wider
        </CustomCard>
      </Grid>
      <Grid item xs={4}>
        <RecipeReviewCard></RecipeReviewCard>
      </Grid>
      <Grid item xs={2}>
        <AvatarChips></AvatarChips>
      </Grid>
      <Grid item xs={2}>
        <CustomCard title="Last Column" buttontext="test">
          Last column is wider
        </CustomCard>
      </Grid>
    </Grid>
  ); // 4 + 2 + 2 + 4 = 12, so grid will be 4 columns on one row
}
// ++ Create some different Cards and lay them out in a Grid
// see https://mui.com/material-ui/react-grid/ for more options
