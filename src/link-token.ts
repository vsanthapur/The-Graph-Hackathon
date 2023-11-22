import {
  Transfer as TransferEvent,
  Approval as ApprovalEvent
} from "../generated/LinkToken/LinkToken"
import { Transfer, Approval } from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index // Added transaction index
  entity.transactionSender = event.transaction.from // Added transaction sender
  entity.gasPrice = event.transaction.gasPrice // Added gas price
  entity.transactionValue = event.transaction.value // Added transaction value
  entity.gasLimit = event.transaction.gasLimit //added gas limit

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.transactionIndex = event.transaction.index // Add transaction index
  entity.transactionSender = event.transaction.from // Add transaction sender
  entity.gasPrice = event.transaction.gasPrice // Add gas price
  entity.transactionValue = event.transaction.value // Added transaction value
  entity.gasLimit = event.transaction.gasLimit //added gas limit
  
  


  entity.save()
}
