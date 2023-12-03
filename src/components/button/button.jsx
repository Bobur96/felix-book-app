import { Button } from "@mui/material";

const Buttons = (props) => {
  const { text, bg, color, w, event, type, loading, icon } = props;

  const style = {
    width: w ? w : "240px",
    gap: icon ? "12px" : "8px",
    background: bg ? bg : "#6200EE",
    border: `1px solid ${color ? color : "#6200EE"}`,
    color: `${color ? color : "#FEFEFE"}`
  }

  return (
    <Button disabled={loading} style={style} type={type ? type : 'button'} onClick={event}>
      {icon && <img src={icon} alt={text} />} {text}
    </Button>
  );
};

export default Buttons;
