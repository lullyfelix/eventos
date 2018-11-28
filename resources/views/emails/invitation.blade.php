@component('mail::message')
{!! $invitation->getViewVariables()['invitation_text'] !!}

<table>
<tr>
<td>
@component('mail::button', ['color' => 'error', 'url' => route('invitations.reject', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Declinar
@endcomponent
</td>
<td>
@component('mail::button', ['url' => route('invitations.accept', ['event_id' => $invitation->subEvent->event->id, 'sub_event_id' => $invitation->subEvent->id, 'invitation_id' => $invitation->id])])
Aceitar
@endcomponent
</td>
</tr>
</table>

Atenciosamente,<br>
<br>
{{ $client_full_name }} da Alerj<br>
(21)2588-1196 / 2588-1266

<img src="{{ route('invitations.received', $invitation->uuid) }}" alt="">
@endcomponent