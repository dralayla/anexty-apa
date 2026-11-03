module.exports = async (req, res) => {
  try {
    const r = await fetch('https://fqrbrsjauzfoxeqshubc.supabase.co/rest/v1/rpc/paciente_abrir', {
      method: 'POST',
      headers: { apikey: 'sb_publishable_GJddJE_QwWj9PxsphwPaDg_hyhNG96v', 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_token: 'keepalive' })
    });
    res.status(200).json({ ok: true, status: r.status });
  } catch (e) {
    res.status(200).json({ ok: false });
  }
};
