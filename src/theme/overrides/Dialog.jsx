// ----------------------------------------------------------------------

import { alpha } from "@mui/material/styles";

export default function Dialog(theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z24,
          '&.MuiPaper-rounded': {
            borderRadius: theme.shape.borderRadiusMd
          },
          '&.MuiDialog-paperFullScreen': {
            borderRadius: 0
          },
          '&.MuiDialog-paper .MuiDialogActions-root': {
            padding: theme.spacing(2)
          },
          '@media (max-width: 600px)': {
            margin: theme.spacing(2)
          },
          '@media (max-width: 663.95px)': {
            '&.MuiDialog-paperWidthSm.MuiDialog-paperScrollBody': {
              maxWidth: '100%'
            }
          }
        },
        paperFullWidth: {
          width: '100%'
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
          maxHeight: 64,
          borderBottom: `1px dashed ${alpha(theme.palette.grey[500], 0.24)}`,
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          borderTop: 0,
          borderBottom: 0,
          padding: `${theme.spacing(2)} !important`
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          '& > :not(:first-of-type)': {
            marginLeft: theme.spacing(1)
          },
          maxHeight: 64,
          borderTop: `1px dashed ${alpha(theme.palette.grey[500], 0.24)}`,
        }
      }
    }
  };
}
