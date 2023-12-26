import { ClientOnly } from "@/components/client-only";
import { EmptyState } from "@/components/empty-state";

import { getCurrentUser } from "@/actions/get-current-user";
import getListingById from "@/actions/get-listing-by-id";
import getReservations from "@/actions/get-reservations";

import { ListingClient } from "./_components/listing-client";

interface ListingPageProps {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: ListingPageProps }) => {
  const currentUser = await getCurrentUser();

  const listing = await getListingById(params);
  const reservations = await getReservations(params);

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
