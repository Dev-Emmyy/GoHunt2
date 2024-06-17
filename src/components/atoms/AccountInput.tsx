'use client'
import { Box, InputLabel, InputBase, Typography } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

const banks = [
  'Access Bank',
  'First Bank',
  'UBA',
  'Kuda',
  'Opay'
]

type IValue = {
  accountNumber: string;
  holdersName: string;
  bankName: string;
}

type IProps = {
  onChange?: (value: string) => void;
  onBankChange?: (value: string) => void;
  value?: Partial<IValue>;
}

export function AccountInput({ value, onChange, onBankChange }: IProps) {
    return (
    <Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 1,
        '& label': {
          color: 'white',
          fontSize: '1rem'
        }
      }}>
        <InputLabel>Seller’s Account Details</InputLabel>
      </Box>
      
      <Box sx={{
        borderBottom: 1,
        borderColor: '#6a6868',
        width: '100%',
        display: 'flex',
        py: 1,
        mb:1
      }}>
        <Box sx={{
          width: '70%',
          borderRight: 1,
          borderColor: '#6a6868',
          height: 30,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pr: 2
        }}>
          <InputBase
            type="number"
            fullWidth
            placeholder='Type the account number'
            defaultValue={value?.accountNumber}
            onChange={(ev) => onChange?.(ev.target.value)}
          />
        </Box>

        <Box sx={{
          display: 'flex',
          mx: 'auto',
        }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={banks}
            defaultValue={value?.bankName}
            onChange={(_ev, value) => onBankChange?.(value as string)}
            sx={{
              display: 'inline-block',
              '& input': {
                width: 200,
                bgcolor: 'background.paper',
                color: (theme) =>
                  theme.palette.getContrastText(theme.palette.background.paper),
              },
            }}
            renderInput={(params) => (
              <div ref={params.InputProps.ref}>
                <input type="text" {...params.inputProps} style={{
                  outline: 'none',
                  border: 'none',
                  width: '100%',
                  color: 'white'
                }}/>
              </div>
            )}
          />
        </Box>

      </Box>
      <Typography variant='h6' fontWeight='bold' color='#EB832E'>{value?.holdersName}</Typography>
    </Box>
  )
}