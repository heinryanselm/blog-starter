import { createClient} from "@supabase/supabase-js";

const supbaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || "";

const supabase = createClient(supbaseUrl, supabaseKey);

export default supabase;