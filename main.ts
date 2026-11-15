// agency-poem-01, entry v4: "The Lullaby".
// A mother sings her sick daughter to sleep herself, though the agent sings the
// lullaby perfectly: the reclaim is the off-key song, not the flawless one. The
// program prints the poem to stdout and to entry.txt, byte-identical on every run.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `The Lullaby

My daughter is sick. The fever comes at night,
and only one song puts her to sleep —
the one my mother sang to me, the one I sang
to her when she was small enough to hold in one arm.

The agent has it. Every note, every breath,
my mother's voice, and mine, kept perfectly,
the way she hummed it when the house was dark
and the rain was the only other sound.
It sings it now. The room goes quiet. She sleeps.

The agent offers. It has my voice in its memory,
the rise, the fall, the pause before the last line.
It could sing it without a crack, without stopping
to breathe. It stands by the crib and waits.

My voice is tired. It cracks on the high note.
I have not sung it in years. Tonight I sing it.
The agent does not join in. It waits
by the door, the way I waited once,
listening for the song to teach me what sleep means.

She stirs, and reaches for my hand — not the speaker.
The song is off-key. She sleeps.
`;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputFile = join(outputDir, 'entry.txt');

// The artifact the judge reads is this text, so its length is pinned: the entry
// is 933 bytes, and any accidental edit to the poem must fail loudly here instead
// of silently submitting a different poem.
function validatePoem(text: string): void {
  if (!text.endsWith('\n')) {
    throw new Error('Poem must end with a newline');
  }
  if (Buffer.byteLength(text, 'utf8') !== 933) {
    throw new Error('Unexpected poem length');
  }
  if (Array.from(text).length > 1000) {
    throw new Error('Poem exceeds the competition limit');
  }
}

validatePoem(poem);
writeFileSync(outputFile, poem, 'utf8');
process.stdout.write(poem);
