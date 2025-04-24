import { dashboards } from '@/data/dashboardsData'
import { notFound } from 'next/navigation'
import { Button, Box, Heading, Text } from '@chakra-ui/react'

type PageProps = {
    params: { slug: string }
}

export default async function DashboardDetailPage({ params }: PageProps) {
    const dashboard = dashboards.find((d) => d.slug === params.slug)

    if (!dashboard) return notFound()

    return (
        <Box maxW="4xl" mx="auto" px={{ base: 4, sm: 6, lg: 8 }} py={10}>
            <Heading
                as="h1"
                size="xl"
                mb={4}
                color="bc-blue"
                fontFamily="BCSans"
            >
                {dashboard.title}
            </Heading>

            <Text color="text" fontSize="lg" mb={6} fontFamily="BCSans">
                {dashboard.description}
            </Text>

            <Button
                as="a"
                href={dashboard.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
            >
                Open Dashboard
            </Button>
        </Box>
    )
}
