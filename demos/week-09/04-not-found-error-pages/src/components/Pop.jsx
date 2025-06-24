import * as Popover from "@radix-ui/react-popover";
import { DrawingPinFilledIcon } from "@radix-ui/react-icons";

export default function Pop() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button>
          <DrawingPinFilledIcon />
        </button>
      </Popover.Trigger>
      {/* anchor gives context to the popover for better accessibility */}
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <div>
            <h2>This is a very nice rollercoaster page!</h2>
            <p>Come back later for more!</p>
          </div>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
