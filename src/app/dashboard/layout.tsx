import { SideMenu } from "@/components/layouts/SideMenu"
import { Box, Container } from "@mui/material"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
      {children}
      </Box>
    </Box>)
}