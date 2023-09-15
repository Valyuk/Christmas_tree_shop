import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box mt='70px' p='40px 0' backgroundColor={neutral.light}>
      <Box
        width='80%'
        margin='auto'
        display='flex'
        justifyContent='space-between'
        flexWrap='wrap'
        rowGap='30px'
        columnGap='clamp(20px,30px,40px)'>
        <Box width='clamp(20%, 30%, 40%)'>
          <Typography
            variant='h4'
            fontWeight='bold'
            mb='30px'
            color={shades.secondary[500]}>
            Yalunka Kuty
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et
            mollitia id ipsum repellendus quos pariatur eius, tenetur
            consequuntur placeat itaque optio porro eos, velit aliquid impedit
            asperiores blanditiis unde?
          </div>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            About Us
          </Typography>
          <Typography mb='30px'>Careers</Typography>
          <Typography mb='30px'>Our Stores</Typography>
          <Typography mb='30px'>Terms and Conditions</Typography>
          <Typography mb='30px'>Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Customer Care
          </Typography>
          <Typography mb='30px'>Customer Care</Typography>
          <Typography mb='30px'>Track Your Order</Typography>
          <Typography mb='30px'>Corporate and Bulk Purchasing</Typography>
          <Typography mb='30px'>Returns and Refunds</Typography>
        </Box>
        <Box width='clamp(20%, 25%, 30%)'>
          <Typography variant='h4' fontWeight='bold' mb='30px'>
            Contact Us
          </Typography>
          <Typography mb='30px'>50 north Kuty, Ukraine, DC 40222</Typography>
          <Typography mb='30px'>Email: somethingsomething@gmail.com</Typography>
          <Typography mb='30px'>(333)111-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
