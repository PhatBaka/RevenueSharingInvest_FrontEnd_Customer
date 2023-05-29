// material
import { Box, CircularProgress, Container, Typography } from '@mui/material';

import Page from 'components/Page';
import ProjectReportRevenue from 'components/table/sidebarProject/ProjectReportRevenue';

// ----------------------------------------------------------------------

export default function ReportDailyProject() {
  return (
    <Page title="Báo cáo dự án hằng ngày | Krowd dành cho doanh nghiệp">
      <Container maxWidth={false}>
        <ProjectReportRevenue />
      </Container>
    </Page>
  );
}
