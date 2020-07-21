import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


function SimpleCart(props) {
  let cartHTML = [];

  props.cartContents.forEach((item, i) => {
    cartHTML.push(
      <Grid>
        <Typography>
          {item.name}
        </Typography>

        <Button
          onClick={(e) => {
            props.dispatch({
              type: 'REMOVE_FROM_CART',
              payload: item
            })
          }}
        >
          <Delete />
        </Button>
      </Grid>
    )
  })

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <Typography>Items</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {cartHTML}
      </AccordionDetails>
    </Accordion>
  )
}

function mapStateToProps(state) {
  return {
    cartContents: state.cart.cartContents,
    cartCount: state.cart.cartCount
  }
}

export default connect(mapStateToProps)(SimpleCart)